import React from "react";

// Img
import HeaderImg from "../assets/img/Header-details.png";
import asideBack from "../assets/img/asideBack.png";
import starLine from "../assets/img/bnfshStar.svg";

// Css
import styles from "../Components/Details.module.css";

// Icons
import {
  FaLongArrowAltLeft,
  FaCopy,
  FaShareAlt,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Details = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={HeaderImg} alt="Header-Img" className={styles.headerImg} />
      </header>
      <main className={styles.container}>
        <aside className={styles.recomends}>
          {/* <section className={styles.category}>
            <h1>دستبندی ها</h1>
            <div className={styles.categoryBox}>
              <details>
                <summary>
                  <i class={styles.arrow}></i>لورم ایسپوم
                </summary>
                <a href="#">لورم ایسپوم</a>
                <a href="#">لورم ایسپوم</a>
                <a href="#">لورم ایسپوم</a>
              </details>
              <details>
                <summary>
                  <i class={styles.arrow}></i>لورم ایسپوم
                </summary>
                <a href="#">لورم ایسپوم</a>
                <a href="#">لورم ایسپوم</a>
                <a href="#">لورم ایسپوم</a>
              </details>
              <details>
                <summary>
                  <i class={styles.arrow}></i>لورم ایسپوم
                </summary>
                <a href="#">لورم ایسپوم</a>
                <a href="#">لورم ایسپوم</a>
                <a href="#">لورم ایسپوم</a>
              </details>
            </div>
          </section> */}
          <section className={styles.category}>
            <h1>پربازدید ها</h1>
            <div className={styles.categoryBox}>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
            </div>
            <img
              src={asideBack}
              alt="background"
              className={styles.visitedBack}
            />
          </section>
          <section className={styles.category}>
            <h1>مطالب پیشنهادی</h1>
            <div className={styles.categoryBox}>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
              <a href="#">لورم ایسپوم</a>
            </div>
            <img
              src={asideBack}
              alt="background"
              className={styles.proposalBack}
            />
          </section>
        </aside>
        {/* ..........Main Section............ */}
        <section className={styles.MainDetails}>
          <div className={styles.navigate}>
            <a href="#">آیه ها</a>
            <FaLongArrowAltLeft />
            <a href="#">سوره ها</a>
            <FaLongArrowAltLeft />
            <a href="#">آل عمران</a>
          </div>
          <div className={styles.aye}>
            <p>
              يَومَ يَكونُ النّاسُ كَالفَراشِ المَبثوثِ وَتَكونُ الجِبالُ
              كَالعِهنِ المَنفوشِ يَومَ يَكونُ النّاسُ كَالفَراشِ المَبثوثِ
              وَتَكونُ الجِبالُ كَالعِهنِ المَنفوشِ يَومَ يَكونُ النّاسُ
              كَالفَراشِ المَبثوثِ وَتَكونُ الجِبالُ كَالعِهنِ المَنفوشِ
            </p>
          </div>
          <span className={styles.spanDetails}>سوره آل عمران ، آیه 173</span>
          {/* ............Means............ */}
          <div className={styles.means}>
            <h2>معنی :</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است.
            </p>
            <div className={styles.iconMeans}>
              <details className={styles.shaire}>
                <summary>
                  <span className={styles.copy}>
                    <FaShareAlt />
                  </span>
                </summary>
                <div className={styles.shaireBox}>
                  <a href="Wpp">
                    Whats app
                    <FaWhatsapp />
                  </a>
                  <a href="Insta">
                    Instagram
                    <FaInstagram />
                  </a>
                  <a href="Telgram">
                    Telegram
                    <FaTelegramPlane />
                  </a>
                  <a href="Tw">
                    Twitter
                    <FaTwitter />
                  </a>
                </div>
              </details>
              <span className={styles.copy}>
                <FaCopy />
              </span>
            </div>
          </div>
          <div className={styles.starLine_Box}>
            <img src={starLine} alt="starLine" className={styles.starLine} />
          </div>
          {/* ...........Interpretation........... */}
          <div className={styles.means}>
            <h2>تفسیر :</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است.
            </p>
          </div>
          <div className={styles.starLine_Box}>
            <img src={starLine} alt="starLine" className={styles.starLine} />
          </div>

          {/* ...........Ahadis............ */}
          <div className={styles.means}>
            <h2>احادیث دراین باره :</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است.
            </p>
          </div>
          <div className={styles.starLine_Box}>
            <img src={starLine} alt="starLine" className={styles.starLine} />
          </div>

          {/* .........Table Of More Information............. */}
          <div className={styles.means}>
            <h2>اطلاعات بیشتر درباره این آیه :</h2>
            <div className={styles.table}>
              <div className={styles.title}>
                <p>مکان نزول</p>
                <hr />
                <p>نام های دیگر</p>
                <hr />
                <p>آیات مرتبط</p>
                <hr />
                <p>هدف آیه</p>
              </div>
              <div className={styles.contentTable}>
                <p>لورم ایسپوم متن ساختگی</p>
                <hr />
                <p>لورم ایسپوم متن ساختگی</p>
                <hr />
                <p>لورم ایسپوم متن ساختگی</p>
                <hr />
                <p>لورم ایسپوم متن ساختگی</p>
              </div>
            </div>
            <button type="submit" className={styles.sendComments}>
              ارسال دیدگاه
            </button>
          </div>

          {/* .......Tags............ */}
          <div className={styles.means}>
            <h2>برچسب ها</h2>
            <div className={styles.contentTags}>
              <a href="#">
                <span>لورم ایسپوم</span>
              </a>
              <a href="#">
                <span>لورم ایسپوم</span>
              </a>
              <a href="#">
                <span>لورم ایسپوم</span>
              </a>
              <a href="#">
                <span>لورم ایسپوم</span>
              </a>
            </div>
          </div>
        </section>

        {/* .........Select Content............. */}
        <aside className={styles.recomends}>
          {/* ............List.............. */}
          <section className={styles.category}>
            <h1>دسترسی سریع</h1>
            <div className={styles.categoryBox}>
              {/* <div className={styles.selectContent}>
                <select>
                  <option value="page1">1</option>
                  <option value="page2">2</option>
                  <option value="page3">3</option>
                </select>
                <span>: صفحه</span>
              </div> */}
              <div className={styles.selectContent}>
                <select>
                  <option value="page1">بقره</option>
                  <option value="page2">2</option>
                  <option value="page3">3</option>
                </select>
                <span>: سوره</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="page1">1</option>
                  <option value="page2">2</option>
                  <option value="page3">3</option>
                </select>
                <span>: آیه</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: حزب</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: جز</span>
              </div>
            </div>
            <img
              src={asideBack}
              alt="background"
              className={styles.selectContent_Back}
            />
          </section>
          {/* .........Divisions.......... */}
          {/* <section className={styles.category}>
            <h1>تقسیمات</h1>
            <div className={styles.categoryBox}>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: حزب</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: جز</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: رکوع</span>
              </div>
            </div>
            <img
              src={asideBack}
              alt="background"
              className={styles.selectContent_Back}
            />
          </section> */}

          {/* .............Content........... */}
          {/* <section className={styles.category}>
            <h1>محتوا</h1>
            <div className={styles.categoryBox}>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: ترجمه</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span>: تفسیر</span>
              </div>
              <div className={styles.selectContent}>
                <select>
                  <option value="Fn">فارسی</option>
                  <option value="Arb">عربی</option>
                  <option value="Eng">انگلیسی</option>
                </select>
                <span>: زبان</span>
              </div>
            </div>
            <img
              src={asideBack}
              alt="background"
              className={styles.selectContent_Back}
            />
          </section> */}
        </aside>
      </main>
    </>
  );
};

export default Details;
