import { useState } from "react";
import Color from "./Color";
import styles from "../styles/SingleBrand.module.css";

const SingleBrand = ({ brand }) => {
  const [selectedBrand, setSelectedBrand] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedBrand(!selectedBrand);
  };

  return (
    <div className={styles.container}>
      <div
        className={!selectedBrand ? styles.title : styles.selectedTitle}
        onClick={handleClick}
      >
        {brand.title}
      </div>
      <div className={!selectedBrand ? styles.colors : styles.selectedColors}>
        {brand.colors.map((color, idx) => (
          <Color color={color} key={idx} selectedBrand={selectedBrand} />
        ))}
      </div>
    </div>
  );
};

export default SingleBrand;
