"use client";
import Link from "next/link";
import styles from "./TopMenu.module.scss";
import { motion } from "framer-motion";
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store";

export const TopMenu = () => {
  const [count, setCount] = useState(0);

  const openSideMenuCart = useCartStore((state) => state.openSideMenuCart);



  return (
    <nav className={styles.topMenu}>
      <Link href="/" className="flex gap-3 ">
        <span className={`${titleFont.className} ${styles.topMenu_title} `}>
          {" "}
          MKS
        </span>
        <span className={styles["topMenu_title--secondary"]}> Sistemas </span>
      </Link>


      <button className={styles.topMenu_btnCart} onClick={openSideMenuCart}>
        <Image src="/images/icons/cart.png" alt="cart" width={20} height={20} />
        <motion.span
          key={count} 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.cartCount}
        >
          {count}
        </motion.span>
      </button>
    </nav>
  );
};
