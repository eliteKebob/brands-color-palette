import React from "react";
import styles from "../styles/SingleBrand.module.css";
import { FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

const Color = ({ color, selectedBrand }) => {
  const handleClick = (e) => {
    navigator.clipboard.writeText(`#${color}`);
    toast.dark(`#${color} panoya kopyalandı!`, {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={!selectedBrand ? styles.color : styles.selectedColor}
    >
      <FaCopy
        fill={`#${color}`}
        className={!selectedBrand ? styles.copyIcon : styles.selectedCopy}
        onClick={handleClick}
      />
    </div>
  );
};

export default Color;
