"use client";
import { useCartStore } from "@/store";
import clsx from "clsx";
import styles from "./Cart.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Loading, QuantitySelector } from "../ui";
import { useEffect, useState } from "react";

export const Cart = () => {
  const isSideMenuOpen = useCartStore((state) => state.isSideMenuCartOpen);
  const closeMenu = useCartStore((state) => state.closeSideMenuCart);
  const productsInCart = useCartStore((state) => state.cart);
  const { itemsInCart, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  const [loaded, setLoaded] = useState(false);

  const formattedPrice = (price: number): number => {
    return Math.round(price);
  };

  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );

  const removeProductFromCart = useCartStore(
    (state) => state.removeProductFromCart
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) <Loading />;

  return (
    <div>
      <div
        className={clsx(styles.content, {
          "translate-x-full": !isSideMenuOpen,
        })}
      >
        <div className="body">
          <div className={styles.header}>
            <h2 className={styles.header_title}>
              Carrinho <br /> de compras
            </h2>
            <button onClick={closeMenu} className={styles.header_close}>
              <span>x</span>
            </button>
          </div>
          {itemsInCart === 0 && loaded ? (
            <div className="flex justify-center items-center h-[400px]">
             
              <div className="flex flex-col items-center">
              <Image
                src="/images/icons/cart.png"
                alt="cart"
                width={25}
                height={25}
              />
                <h1 className="text-3xl font-semibold text-white">
                  Seu carrinho está vazio
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.summary}>
                {productsInCart.map((product) => (
                  <div
                    className={clsx(styles.summary_item, "fade-in")}
                    key={product.id}
                  >
                    <Link
                      href={`/product/${product.id}`}
                      className="align-self-center"
                    >
                      <Image
                        src={product.photo}
                        alt={"Product Image"}
                        className="w-40 md:w-11 object-cover object-center"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between flex-1">
                      <Link
                        className={styles.summary_title}
                        href={`/product/${product.id}`}
                      >
                        {product.name}
                      </Link>
                      <div className="flex justify-between md:gap-4 items-center mt-4 md:mt-0">
                        <QuantitySelector
                          quantity={product.quantity}
                          onQuantityChanged={(value) =>
                            updateProductQuantity(product, value)
                          }
                        />
                        <span className={styles.summary_price}>
                          R${formattedPrice(product.price)}
                        </span>
                      </div>
                    </div>
                    <span
                      onClick={() => removeProductFromCart(product)}
                      className={styles.closeButton}
                    >
                      X
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.footer}>
                <div className={styles.footer_total}>
                  <span>Total:</span>
                  <span>R$ {formattedPrice(total)}</span>
                </div>
                <button className={styles.footer_checkout}>
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
