import React from "react";
import styles from "./styles.module.css";
import logo from "./../../images/logoChat2.png";

const LogoDiv = () => {
  return (
    <div className={styles.logoDivContainer}>
      <div className={styles.imageContainer}>
        <img src={logo} alt="lg" />
      </div>
      <div className={styles.logoText}></div>
    </div>
  );
};

export default LogoDiv;
