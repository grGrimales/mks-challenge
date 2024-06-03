import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';


interface Props {
  products: Product[];
}


export const ProductGrid: React.FC<Props>  = ( { products } ) => {

   
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 p-8 md:max-w-screen-lg xl:max-w-screen-xl m-auto">
      {
        products.map( product => (
          <ProductGridItem
            key={ product.id }
            product={ product }
          />
        ) )
      }

    </div>
  );
};