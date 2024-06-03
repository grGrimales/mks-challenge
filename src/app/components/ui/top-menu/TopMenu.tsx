"use client";
import Link from "next/link";
import styles from "./TopMenu.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store";

export const TopMenu = () => {
  const [count, setCount] = useState(0);

  const openSideMenuCart = useCartStore((state) => state.openSideMenuCart);
  const { itemsInCart } = useCartStore((state) => state.getSummaryInformation());


  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className={styles.topMenu}>
      <Link href="/" className="flex gap-3 fade-in">
        <span className={` ${styles.topMenu_title} `}>
          {" "}
          MKS
        </span>
        <span className={styles["topMenu_title--secondary"]}> Sistemas </span>
      </Link>


      <button className={styles.topMenu_btnCart} onClick={openSideMenuCart}>
        <Image src="/images/icons/cart.png" alt="cart" width={20} height={20} />
        {(loaded && itemsInCart > 0 )&& (
        <motion.span
          key={count} 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.cartCount}
        >
          {itemsInCart}
        </motion.span>
            )}
      </button>
    </nav>
  );
};
