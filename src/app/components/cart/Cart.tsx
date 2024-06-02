"use client";
import { useCartStore } from "@/store";
import clsx from "clsx";
import styles from "./Cart.module.scss";
import Link from "next/link";
import Image from "next/image";
import { QuantitySelector } from "../ui";

export const Cart = () => {
  const isSideMenuOpen = useCartStore((state) => state.isSideMenuCartOpen);
  const closeMenu = useCartStore((state) => state.closeSideMenuCart);

  const formattedPrice = (price: number): number => {
    return Math.round(price);
  };

  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );

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

          <div className={styles.summary}>
          <div className={styles.summary_item}>
              <Link href={`/product/`} className="align-self-center">
                <Image
                  src={`https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp`}
                  alt={"Product Image"}
                  className="w-40 md:w-11 object-cover object-center"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="flex flex-col md:flex-row md:items-center justify-between flex-1">
                <Link className={styles.summary_title} href={`/product/`}>
                  Apple Watch Series 4 GPS
                </Link>
                <div className="flex justify-between md:gap-4 items-center mt-4 md:mt-0">
                  <QuantitySelector quantity={1} onQuantityChanged={() => {}} />
                  <span className={styles.summary_price}>R$1222</span>
                </div>
              </div>
              <span className={styles.closeButton}>X</span>
            </div>

            <div className={styles.summary_item}>
              <Link href={`/product/`} className="align-self-center">
                <Image
                  src={`https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp`}
                  alt={"Product Image"}
                  className="w-40 md:w-11 object-cover object-center"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="flex flex-col md:flex-row md:items-center justify-between flex-1">
                <Link className={styles.summary_title} href={`/product/`}>
                  Apple Watch Series 4 GPS
                </Link>
                <div className="flex justify-between md:gap-4 items-center mt-4 md:mt-0">
                  <QuantitySelector quantity={1} onQuantityChanged={() => {}} />
                  <span className={styles.summary_price}>R$1222</span>
                </div>
              </div>
              <span className={styles.closeButton}>X</span>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.footer_total}>
              <span>Total:</span>
              <span>R$ 1222</span>
            </div>
            <button className={styles.footer_checkout}>Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};
