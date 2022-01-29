import React, { useState } from "react";

// Css
import styles from "./SendContents.module.css";

// Icons
import { FaRegHeart } from "react-icons/fa";

const SendContents = () => {
  const [close, setClose] = useState(false);

  const closeHandler = () => {
    setClose(true);
  };

  const showBox = () => {
    setClose(false);
  };

  return (
    <>
      {!close ? (
        <section className={styles.container}>
          <form action="#" className={styles.form}>
            <label>نام</label>
            <input type="text" placeholder="حسین ایمانی" />
            <label>نام کاربری</label>
            <input type="text" placeholder="@example" />
            <label>نظرات خود را بنویسید.</label>
            <textarea></textarea>
            <div className={styles.btnsForm}>
              <button type="submit" className={styles.sendBtn}>
                ارسال
              </button>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeHandler}
              >
                لغو
              </button>
            </div>
          </form>
          <details className={styles.commentsBox}>
            <summary>
              <span class={styles.arrow}></span>دیدگاه
            </summary>
            <h3>دیدگاه کاربران</h3>
            <div className={styles.comments}>
              <div className={styles.likes}>
                <time>11.10.1400</time>
                <span>
                  <FaRegHeart />
                </span>
              </div>
              <div className={styles.commentsTxt}>
                <h4>شما</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>

            <div className={styles.comments}>
              <div className={styles.likes}>
                <time>11.10.1400</time>
                <span>
                  <FaRegHeart />
                </span>
              </div>
              <div className={styles.commentsTxt}>
                <h4>علی</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
            </div>
          </details>
        </section>
      ) : (
        <button
          type="submit"
          className={styles.sendComments}
          onClick={showBox}
        >
          ارسال دیدگاه
        </button>
      )}
    </>
  );
};

export default SendContents;
