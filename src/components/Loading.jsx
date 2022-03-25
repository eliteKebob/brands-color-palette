import logo from "../assets/orangelion.png";
import styles from "../styles/Etc.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="loading" className={styles.animated} />
      <p className={styles.animated}>Yükleniyor...</p>
    </div>
  );
};

export default Loading;
