import React, { useRef, useState } from "react";
import Landing from "./Landing";

// Css
import styles from "./ContactUs.module.css";

// Icon
import {
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

const ContactUs = () => {
  const [close, setClose] = useState(false);
  const contactRef = useRef();

  const closeHandler = () => {
    setClose(true);
    contactRef.current.style.display = "none";
  };
  return (
    <>
      {!close && (
        <section className={styles.container} ref={contactRef}>
          <i className={styles.closeItem} onClick={closeHandler}>
            <FaTimes />
          </i>
          <h1>ورم ایسپوم متن ساختگلورم ایسپوم متن ساختگی</h1>
          <form action="#" className={styles.formBox}>
            <div className={styles.totalBox}>
              <div className={styles.inptBox}>
                <label htmlFor="Name">نام</label>
                <input type="text" id="Name" placeholder="حسین ایمانی" />
              </div>
              <div className={styles.inptBox}>
                <label htmlFor="userName">نام کاربری</label>
                <input type="text" id="userName" placeholder="@example" />
              </div>
              <div className={styles.inptBox}>
                <label htmlFor="Number">شماره موبایل</label>
                <div className={styles.tels}>
                  <input
                    type="tel"
                    id="Number"
                    placeholder="09*********"
                    className={styles.t}
                  />
                  <span className={styles.telInpt}></span>
                </div>
              </div>
              <div className={styles.inptBox}>
                <label htmlFor="Email">پست الکترونیک</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className={styles.totalBox}>
              <div className={styles.inptBox}>
                <label htmlFor="Desc">موضوع</label>
                <input type="text" id="Desc" />
              </div>
              <div className={styles.inptBox}>
                <label htmlFor="Message">پیغام</label>
                <textarea id="Message"></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                ارسال
              </button>
            </div>
          </form>
          <p>لورم ایپوم متن ساختگی لورم ایپوم متن ساختگی</p>
          <div className={styles.social}>
            <a href="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="Tw">
              <FaTwitter />
            </a>
            <a href="Instagram">
              <FaInstagram />
            </a>
            <a href="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactUs;
