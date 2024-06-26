"use client";

import Image from "next/image";
import Link from "next/link";
import {  Product } from "@/interfaces";

import styles from "./ProductGridItem.module.scss";
import { useCartStore } from "@/store";
import { useState } from "react";
import { clsx } from "clsx";

interface Props {
  product: Product;
}

export const ProductGridItem: React.FC<Props> = ({ product }) => {

  const addProductToCart = useCartStore(state => state.addProductToCart);

  const formattedPrice = Math.round(product.price);
  const [quantity, setQuantity] = useState<number>(1);


  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      quantity: 1,
    };
    addProductToCart(cartProduct);
   
    setQuantity(1);

  }


  return (
    <div className={clsx(styles.card, 'fade-in')}>
      <div>
        <Link href={`/product/${product.id}`}>
          <Image
            src={`${product.photo}`}
            alt={product.name}
            className="w-full object-cover object-center rounded overflow-hidden h-72 max-h-72"
            width={500}
            height={500}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-between flex-1  p-3">
        <div className="flex justify-between items-center">
          <Link className={'cardTitle'} href={`/product/${product.id}`}>
            {product.name}
          </Link>
          <span className={'cardPrice'}>R${formattedPrice}</span>
        </div>

        <p className={styles.cardDescription}>{product.description}</p>
      </div>
      <div className={styles.buttonContainer} onClick={handleAddToCart}>
        <button className={styles.button} >
          <Image
            src="/images/icons/shopping-bag.png"
            alt="cart"
            width={12}
            height={13.5}
          />
          COMPRAR
        </button>
      </div>
    </div>
  );
};
