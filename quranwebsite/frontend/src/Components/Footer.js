import React, { useRef } from "react";

// Img
import bgFooter from "../assets/img/bgFooter.png";
import logo from "../assets/img/User.svg";
import GoUp from "../assets/img/GoUp.svg";


// Css
import styles from "./Footer.module.css";

// Icons
import { BsCashCoin } from "react-icons/bs";
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {

  // ..........Go Up Button.................
  const btnRef = useRef(false);

  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      btnRef.current.style.display = "block";
    } else {
      btnRef.current.style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  // ..........End Go Up Button.................
  return (
    <>
      <footer className={styles.container}>
        <section className={styles.firstRow}>
          <div className={styles.participation}>
            <h2>.برای مشارکت روی دکمه زیر کلیک کنید</h2>
            <button type="button" className={styles.participationBtn}>
              <BsCashCoin /> مشارکت
            </button>
          </div>
          <div className={styles.footerMenu}>
            <h2>منوها</h2>
            <a href="#">آیات</a>
            <a href="#">احادیث</a>
            <a href="#">درباره ما</a>
            <a href="#">پنل کاربری</a>
            <a href="#">ثبت نام</a>
            <a href="#">ورود</a>
          </div>
          <div className={styles.footerMenu}>
            <h2>پیوند های پر بازدید</h2>
            <a href="#">لورم ایسپوم</a>
            <a href="#">لورم ایسپوم</a>
            <a href="#">لورم ایسپوم</a>
            <a href="#">لورم ایسپوم</a>
            <a href="#">لورم ایسپوم</a>
            <a href="#">لورم ایسپوم</a>
          </div>
          <div className={styles.form}>
            <h2>.برای برقراری ارتباط بیشتر اطلاعات خود را وارد کنید</h2>
            <form action="#">
              <input type="text" placeholder="نام" />
              <input type="tel" placeholder="شماره تلفن" />
              <textarea placeholder="نظرات"></textarea>
              <button type="submit">ثبت</button>
            </form>
          </div>
          <div className={styles.socialBox}>
            <div>
              <img src={logo} alt="Logo-of-Gomgashteh" />
            </div>
            <div className={styles.social}>
              <li>
                <a href="#">
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaMapMarkerAlt />
                </a>
              </li>
            </div>
          </div>
        </section>
        <section className={styles.copyRight}>
          <p>
            <FaRegCopyright />
            .کلیه حقوق مادی و معنوی وبسایت متعلق به لورم ایسپوم می باشد
          </p>
        </section>
        <img src={bgFooter} alt="Background" className={styles.bgImg} />

        <div
          id={styles.myBtn}
          onClick={topFunction}
          title="go-to-up"
          ref={btnRef}
        >
          <img src={GoUp} alt="go-to-up" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
