import React from "react";

// Img
import logo from "../assets/img/Icon-metro-search.svg";
import user from "../assets/img/User.svg";

// Css
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.logoBox}>
          <img src={user} alt="" className={styles.logoImg} />
        </div>
        <nav className={styles.menu}>
          <li>
            <a href="#">صفحه اصلی</a>
          </li>
          <li>
            <a href="#Ayat">آیات</a>
          </li>
          <li>
            <a href="#">احادیث</a>
          </li>
          <li>
            <a href="#AboutUs">درباه ما</a>
          </li>
          <li>
            <a href="#ContactUs">تماس باما</a>
          </li>
          <li>
            <a href="#">مشارکت</a>
          </li>
        </nav>
        <div className={styles.searchBox}>
          <input type="text" placeholder="جستجو..." className={styles.search} />
          <a href="#" className={styles.search_logo}></a>
        </div>
        <div className={styles.dropdown}>
          <select name="lang" className={styles.lang}>
            <option value="Fn">فارسی</option>
            <option value="Arabic">عربی</option>
          </select>
          <div className={styles.profBox}>
              <img src={user} alt="profile-account" className={styles.profile} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
