import React from "react";

// Css
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <>
      <section className={styles.container}>
        <h1>ثبت نام</h1>
        <span>
          حساب کاربردی دارید؟ <a href="#">وارد شوید</a>
        </span>
        <form action="#" className={styles.formBox}>
          <div className={styles.details_Input}>
            <label htmlFor="Name">نام</label>
            <input type="text" id="Name" placeholder="حسین ایمانی" />
            <label htmlFor="userName">نام کاربری</label>
            <input type="text" id="userName" placeholder="@example" />
            <label htmlFor="phoneNamber">شماره موبایل</label>
            <div className={styles.telInput}>
              <input type="tel" id="phoneNamber" placeholder="09*********" />
              <sapn></sapn>
            </div>
          </div>

          <div className={styles.details_Input}>
            <label htmlFor="Eamil">پست الکترونیک</label>
            <input type="email" id="Email" placeholder="example@gmail.com" />
            <div className={styles.pass}>
              <label htmlFor="Password">رمز عبور</label>
              <input type="password" id="Password" />
              <span></span>
            </div>
            <div className={styles.pass}>
              <label htmlFor="Password">تکرار رمز عبور</label>
              <input type="password" id="Password" />
              <span></span>
            </div>
          </div>
        </form>
        <button type="submit" className={styles.submitBtn}>ثبت نام</button>
        <p>
          .عضویت شما در سایت به منزله این است که
          <a href=""> شرایط و ضوابط عضویت در سایت </a>را مطالعه کرده وپذیرفته اید
        </p>
      </section>
    </>
  );
};

export default SignUp;
