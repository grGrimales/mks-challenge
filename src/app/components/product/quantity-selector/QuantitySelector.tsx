"use client";

import styles from "./QuantitySelector.module.scss";

interface Props {
  quantity: number;
  onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) {
      return;
    }
    onQuantityChanged(quantity + value);
  };

  return (
    <div className="flex flex-col">
    <span className={styles.title}>Qtd:</span>
    <div className={styles.box}>
      <button
        className={styles.box_decrease}
        onClick={() => onValueChanged(-1)}
      >
        -
      </button>

      <span className=" ">{quantity}</span>

      <button
        className={styles.box_increase}
        onClick={() => onValueChanged(+1)}
      >
        +
      </button>
    </div>
    </div>
  );
};
