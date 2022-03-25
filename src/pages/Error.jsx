import React from "react";
import styles from "../styles/Etc.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.animated}>404!</h1>
      <p className={styles.animated}>Sayfaya ulaşılamadı :/ </p>
    </div>
  );
};

export default Error;
