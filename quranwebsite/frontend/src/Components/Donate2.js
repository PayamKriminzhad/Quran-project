import React from "react";

// Css
import styles from "./Donate2.module.css";

// Images
// import bgBody from "../assets/img/asideBack.png";

// Icon
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const Donate2 = () => {
  return (
    <>
      <section className={styles.container}>
        <h1>جهت مشارکت مبلغ اهدایی خود را به شماره حساب های زیر واریز کنید.</h1>
        <div className={styles.totalBox}>
          <div className={styles.accountNumber_Box}>
            <div className={styles.accountNumber}>
              <div className={styles.numbers}>
                <p>شماره کارت لورم ایسپوم</p>
                <span>6104**********8857</span>
                <span>بنام لورم ایسپوم</span>
              </div>
              <div className={styles.numbers}>
                <p>شماره کارت لورم ایسپوم</p>
                <span>6104**********8857</span>
                <span>بنام لورم ایسپوم</span>
              </div>
            </div>

            <div className={styles.accountNumber}>
              <div className={styles.numbers}>
                <p>شماره کارت لورم ایسپوم</p>
                <span>6104**********8857</span>
                <span>بنام لورم ایسپوم</span>
              </div>
              <div className={styles.numbers}>
                <p>شماره کارت لورم ایسپوم</p>
                <span>6104**********8857</span>
                <span>بنام لورم ایسپوم</span>
              </div>
            </div>
          </div>
          <div className={styles.desBox}>
            <p className={styles.description}>
              لورم ایسپولورم ایسپولورم ایسپولورم ایسپولورم ایسپولورم ایسپولورم
              ایسپولورم ایسپولورم ایسپولورم ایسپوملورم ایسپولورم ایسپولورم
              ایسپولورم ایسپولورم ایسپولورم ایسپولورم ایسپولورم ایسپولورم
              ایسپولورم ایسپوملورم ایسپولورم ایسپولورم ایسپولورم ایسپولورم
              ایسپولورم ایسپولورم ایسپولورم
            </p>
          </div>
          <div className={styles.action}>
            <div className={styles.btns}>
              <button>درخواست ارتباط</button>
              <button>پرداخت اینترنتی</button>
            </div>
            <div className={styles.social}>
              <a href="Telegram"><FaTelegramPlane /></a>
              <a href="Tw"><FaTwitter /></a>
              <a href="Instagram"><FaInstagram /></a>
              <a href="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        {/* <img src={bgBody} alt="Background Image" className={styles.bgBody}/> */}
      </section>
    </>
  );
};

export default Donate2;
