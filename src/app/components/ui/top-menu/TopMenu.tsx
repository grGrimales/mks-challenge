import Link from 'next/link';
import styles from './TopMenu.module.scss';
import { titleFont } from '@/config/fonts';
import Image from 'next/image';


export const TopMenu = () => {
  return (
    <nav className={styles.topMenu}>
        <Link href="/" className='flex gap-3 '>
          <span className={`${titleFont.className} ${styles.topMenu_title} `}>
            {" "}
            MKS 
          </span>
          <span className={styles['topMenu_title--secondary']}> Sistemas </span>
        </Link>
      <button className={styles.topMenu_btnCart}>
        <Image src="/images/icons/cart.png" alt="cart"   width={20} height={20} />
        0</button>
    </nav>
  )
}
