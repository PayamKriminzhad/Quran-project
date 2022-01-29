import React from "react";

// Css
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <section className={styles.container}>
        <h1>ورود</h1>
        <span className={styles.signupSpan}> 
          حساب کاربردی ندارید؟ <a href="#"> ثبت نام کنید</a>
        </span>
        <form action="#" className={styles.loginForm}>
          <div className={styles.inptBox}>
            <label htmlFor="userNameOrEmail">نام کاربرب یا پست الکترونیک</label>
            <input type="text" id="userNameOrEmail" />
          </div>
          <div className={styles.inptBox}>
            <label htmlFor="Password">رمز عبور</label>
            <input type="password" id="Password" />
            <span className={styles.forgetPass}>
              <a href="#">رمزعبور خود را فراموش</a> کرده اید؟
            </span>
          </div>
          <div className={styles.rememberBox}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">مرا بخاطر بسپار</label>
          </div>
        </form>
        <button type="submit" className={styles.submitBtn}>ورود</button>
      </section>
    </>
  );
};

export default Login;
