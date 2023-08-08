import Link from 'next/link';
import styles from './Layout.module.css';


const Layout = ({children}) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href='/'>SellingFood</Link>
                </div>
                <div className={styles.right}>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/categories'>Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Next.js Course by <span>Hasan Moosavi</span> | &copy; All right reserved 2022
            </footer>
        </div>
    );
};


export default Layout;