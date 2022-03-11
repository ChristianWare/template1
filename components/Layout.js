import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
