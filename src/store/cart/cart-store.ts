import { CartProduct } from '@/interfaces';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface State {
    cart: CartProduct[];
    isSideMenuCartOpen: boolean
    openSideMenuCart: () => void
    closeSideMenuCart: () => void

    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    getSummaryInformation: () => {
        total: number;
        itemsInCart: number;
      };
      removeProductFromCart: (product: CartProduct) => void;


}

export const useCartStore = create<State>()(
    persist(
        (set, get) => ({

            cart: [],

            isSideMenuCartOpen: false,

            openSideMenuCart: () => set({ isSideMenuCartOpen: true }),
            closeSideMenuCart: () => set({ isSideMenuCartOpen: false }),
            getSummaryInformation: () => {
                const { cart } = get();
        
                const subTotal = cart.reduce(
                  (subTotal, product) => (product.quantity * product.price) + subTotal,
                  0
                );
                const total = subTotal;
                const itemsInCart = cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                );
        
                return {
                  total,
                  itemsInCart,
                };
              },
              

            addProductToCart: (product: CartProduct) => {
                console.log(product)
                const { cart } = get();

                const productInCart = cart.some((p) => p.id === product.id);

                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }

                const updatedCartProducts = cart.map((p) => {
                    if (p.id === product.id ) {
                        return {
                            ...p,
                            quantity: p.quantity + product.quantity
                        }
                    }
                    return p;
                })
                set({ cart: updatedCartProducts })
            },

            removeProductFromCart: (product: CartProduct) => {
                const { cart } = get();
                const updatedCartProducts = cart.filter((p) => p.id !== product.id );
                set({ cart: updatedCartProducts })
            },

            updateProductQuantity: (product: CartProduct, quantity: number) => {
                const { cart } = get();

                const updatedCartProducts = cart.map((p) => {
                    if (p.id === product.id ) {
                        return {
                            ...p,
                            quantity
                        }
                    }
                    return p;
                })
                set({ cart: updatedCartProducts })
            },

        }),

        {
            name: "shopping-cart",
        }
    )
)
