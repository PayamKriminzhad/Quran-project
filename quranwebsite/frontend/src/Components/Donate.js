import React, { useState } from "react";

// Css
import styles from "./Donate.module.css";


// Images
import Shapark from "../assets/img/Shaparak.png";
import Bitcoin from "../assets/img/bitcoin.png";
import Ap from "../assets/img/Ap.png";
import Meli from "../assets/img/Meli.png";
import Saderat from "../assets/img/Saderat.png";

const Donate = () => {
  const [shaparak, setShaparak] = useState(true);
  const [arzedigital, setArzedigital] = useState(false);
  const [activeshaparak, setActiveshaparak] = useState(true);
  const [activearz, setActivearz] = useState(false);

  const shaparakBtn = () => {
    setShaparak(true);
    setArzedigital(false);
  };

  const arzedigitalBtn = () => {
    setShaparak(false);
    setArzedigital(true);
  };
  
  return (
    <>
      <section className={styles.container}>
        <h1>
          جهت مشاوره د ر توسعه ،ابتدا ثبت نام کنید،بعد مبلغ و نحوه واریز ر ا
          انتخاب کنید.
        </h1>
        <div className={styles.formsBox}>
          {/* ..........First Form(Specifications)........... */}
          <form action="#" className={styles.Specifications}>
            <h2>مشخصات</h2>
            <div className={styles.checkBox}>
              <label>حمایت بصورت ناشناس</label>
              <input type="checkbox" />
            </div>
            <label>نام ونام خانوادگی</label>
            <input type="text" placeholder="حسین ایمانی" />
            <label>پست الکترونیک</label>
            <input type="email" placeholder="@example" />
            <label>شماره همراه</label>
            <div className={styles.telBox}>
              <input type="tel" placeholder="09*********" />
              <span className={styles.telInput}></span>
            </div>
          </form>
          {/* ........Secend Form (Pay)............ */}
          <form action="#" className={styles.Specifications}>
            <h2>پرداخت</h2>
            <p>نوع پرداخت الکترونیکی خود را انتخاب کنید:</p>
            <div className={styles.radioBox}>
              <div className={styles.Shaparak}>
                <img src={Shapark} alt="Shaparak_Image" />
                <div>
                  <label htmlFor="1">شاپرک</label>
                  <input
                    type="radio"
                    id="1"
                    name="Payment"
                    onClick={shaparakBtn}
                  />
                </div>
              </div>
              <div className={styles.Bitcoin}>
                <img src={Bitcoin} alt="Bitcoin_Image" />
                <div>
                  <label htmlFor="2">ارز دیجیتال</label>
                  <input
                    type="radio"
                    id="2"
                    name="Payment"
                    onClick={arzedigitalBtn}
                  />
                </div>
              </div>
            </div>
            <div className={styles.Amount}>
              <label htmlFor="amount">
                مبلغ(<span>ریال</span>)
              </label>
              <input type="text" placeholder="500,000 ریال" />
            </div>
            {shaparak ? (
              <div className={styles.method}>
                <h2>نحوه پرداخت:</h2>
                <div className={styles.paymentWay}>
                  <label htmlFor="Ap">
                    <img src={Ap} alt="آپ" />
                  </label>
                  <input type="radio" name="paymentWay" id="Ap" />
                  <label htmlFor="Meli">
                    <img src={Meli} alt="بانک-ملی" />
                  </label>
                  <input type="radio" name="paymentWay" id="Meli" />
                  <label htmlFor="Saderat">
                    <img src={Saderat} alt="بانک-صادرات" />
                  </label>
                  <input type="radio" name="paymentWay" id="Saderat" />
                </div>
              </div>
            ) : (
              <div className={styles.arzedigitalShow}>
                <label htmlFor="bitcoin1">لورم ایسپوم</label>
                <input type="text" id="bitcoin1" />

                <div className={styles.bitcoin23}>
                  <div className={styles.inpt1}>
                    <label htmlFor="bitcoin2">لورم ایسپوم</label>
                    <input type="text" id="bitcoin2" />
                  </div>
                  <div className={styles.inpt2}>
                    <label htmlFor="bitcoin3">لورم ایسپوم</label>
                    <input type="text" id="bitcoin3" />
                  </div>
                </div>
              </div>
            )}
            <button type="submit" className={styles.paymentBtn}>
              پرداخت
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Donate;
