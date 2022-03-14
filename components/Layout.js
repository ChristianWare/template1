import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.layout}>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
