import React from "react";

// Css
import styles from "./Fourzerofour.module.css";

// Images
import fzf from "../assets/img/fzf.svg";
import image from "../assets/img/fozfo.png";

const Fourzerofour = () => {
  return (
    <>
      <section className={styles.container}>
        <img src={fzf} alt="404 image" />
        <p>.صفحه مورد نظر یافت نشد</p>
        <a href="#">بازگشت به صفحه نخست</a>
        <img src={image} alt="404 images" />
        <span>لورم ایسپولورم ایسپولورم ایسپولورم ایسپوم</span>
      </section>
    </>
  );
};

export default Fourzerofour;
