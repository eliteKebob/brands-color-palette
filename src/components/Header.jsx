import logo from "../assets/lioncolor.png";
import styles from "../styles/Header.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={styles.navbarLeft}>
          <Link to="/about">
            <li>Hakkında</li>
          </Link>
          <Link to="/contact">
            <li>İletişim</li>
          </Link>
        </ul>
        <FaUserCircle className={styles.userIcon} />
        <div className={styles.divider}></div>
        <ul className={styles.navbarRight}>
          <Link to="/">
            <li>Giriş Yap</li>
          </Link>
          <Link to="/">
            <li>Kayıt Ol</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
