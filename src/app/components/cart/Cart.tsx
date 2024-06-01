"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import styles from "./Cart.module.scss";

export const Cart = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuCartOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenuCart);

  console.log(isSideMenuOpen);
  return (
    <div>
      {/* Background black */}
      {/* {isSideMenuOpen && (
          <div  className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-15" />
        )}
       */}
      {/* Blur */}
      {/* {isSideMenuOpen && (
          <div
            onClick={closeMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        )} */}

      {/* Sidemenu */}
      <nav
        className={clsx(styles.content, {
          "translate-x-full": !isSideMenuOpen,
        })}
      >
        <div className={styles.header}>
          <h2 className={styles.header_title}>Carrinho de compras</h2>
          <span className={styles.header_close}>X</span>
        </div>
      </nav>
    </div>
  );
};
