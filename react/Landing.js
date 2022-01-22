import React, { useRef } from "react";

// Img
import bgHeader from "../assets/img/Header.png";
import quranImg from "../assets/img/quran.svg";
import bgSection2 from "../assets/img/heaven.png";
import titleBox from "../assets/img/box.svg";
import Greenstar from "../assets/img/GreenStar.svg";
import Bnfshstar from "../assets/img/bnfshStar.svg";
import bgAboutUs from "../assets/img/aboutUs-Back.svg";
import aboutUsimages from "../assets/img/Group-145.png";
import aboutUs_img2 from "../assets/img/aboutUs_img2.png";

// Css
import styles from "./Landing.module.css";

const Landing = () => {

  return (
    <>
      <header>
        <div className={styles.hero}>
          <div className={styles.logoHero}>
            <img src={quranImg} alt="quran_image" className={styles.QuranImg} />
          </div>
          <div className={styles.ayeHero}>
            <h1>
              نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ
              يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ
            </h1>
            <p className={styles.ayep}>
              اين كتاب را در حالى كه مؤيد آنچه [از كتابهاى آسمانى] پيش از خود
              مى‏ باشد به حق [و به تدريج] بر تو نازل كرد
            </p>
            <span className={styles.ayeSpan}>سوره حج، آیه 16</span>
          </div>
        </div>
        <img
          src={bgHeader}
          alt="background-Header"
          className={styles.bgHeader}
        />
      </header>
      {/* ........Area After Header............ */}ّ
      <main>
        <section className={styles.container}>
          <h2>
            نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ
            يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ
          </h2>
          <p className={styles.means}>
            اين كتاب را در حالى كه مؤيد آنچه [از كتابهاى آسمانى] پيش از خود مى‏
            باشد به حق [و به تدريج] بر تو نازل كرد
          </p>
          <span className={styles.ayeSpan2}>سوره حج، آیه 16</span>
        </section>
        {/* ........Section 2 (Ayat)............ */}
        <section className={styles.boxSection2}>
          <div className={styles.detail_bgSection2}>
            <h3 className={styles.detail_bgSection2h3}>: پیامبر رحمت(ص)</h3>
            <h3>انی تارک فیکم ثقلین</h3>
            <p className={styles.means}>
              .من در میان شما دو امانت گرانبها گذاشته ام
            </p>
          </div>
          <div className={styles.titleBox} id="Ayat">
            <div className={styles.Box}>
              <span className={styles.boxSpan1}>عترت اهل بیت</span>
              <img src={titleBox} alt="Title-Box" />
            </div>
            <div className={styles.Box}>
              <span className={styles.boxSpan2}>کتاب خدا</span>
              <img src={titleBox} alt="Title-Box" />
            </div>
          </div>
          <img
            src={bgSection2}
            alt="Background-image"
            className={styles.bgSection2}
          />
        </section>

        <section className={styles.Ayat} >
          <div className={styles.selectBoxMain} id={styles.selectBoxMain}>
            <div className={styles.selectBox}>
              <select name="lorem">
                <option value="l0">لورم ایسپوم</option>
                <option value="l1">لورم ایسپوم</option>
                <option value="l2">ورم ایسپوم</option>
                <option value="l3">ورم ایسپوم</option>
              </select>
              <select name="Topic">
                <option value="t0">موضوع</option>
                <option value="t1">ورم ایسپوم</option>
                <option value="t2">ورم ایسپوم</option>
                <option value="t3">ورم ایسپوم</option>
              </select>
              <select name="Quotation">
                <option value="q0">نقل کننده</option>
                <option value="q1">ورم ایسپوم</option>
                <option value="q2">ورم ایسپوم</option>
                <option value="q3">ورم ایسپوم</option>
              </select>
            </div>
            <div className={styles.totalAyat}>
              <h2>
                نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ
                يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ
              </h2>
              <p>
                اين كتاب را در حالى كه مؤيد آنچه [از كتابهاى آسمانى] پيش از خود
                مى‏ باشد به حق [و به تدريج] بر تو نازل كرد
              </p>
            </div>
            <div className={styles.ayatDetails}>
              <span className={styles.ayeSpan}>سوره حج، آیه 16</span>
              <a href="#">...مشاهده تفسیر و جزئیات</a>
            </div>
            <div className={styles.lineStar}>
              <img src={Bnfshstar} alt="star" className={styles.imgStar} />
            </div>
          </div>

          <div className={styles.selectBoxMain}>
            <div className={styles.selectBox}>
              <select name="Aye">
                <option value="j0">انتخاب آیه</option>
                <option value="j1">1</option>
                <option value="j2">2</option>
                <option value="j3">3</option>
              </select>
              <select name="Soure">
                <option value="s0">انتخاب سوره</option>
                <option value="s1">1</option>
                <option value="s2">2</option>
                <option value="s3">3</option>
              </select>
              <select name="Joz" placeholder="joz">
                <option value="a0">انتخاب جزء</option>
                <option value="a1">1</option>
                <option value="a2">2</option>
                <option value="a3">3</option>
              </select>
            </div>
            <div className={styles.totalAyat}>
              <h2>
                نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ
                يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ
              </h2>
              <p>
                اين كتاب را در حالى كه مؤيد آنچه [از كتابهاى آسمانى] پيش از خود
                مى‏ باشد به حق [و به تدريج] بر تو نازل كرد
              </p>
            </div>
            <div className={styles.ayatDetails}>
              <span className={styles.ayeSpan}>سوره حج، آیه 16</span>
              <a href="#">...مشاهده تفسیر و جزئیات</a>
            </div>
            <div className={styles.lineStar}>
              <img src={Greenstar} alt="star" className={styles.imgStar} />
            </div>
          </div>
        </section>

        {/* .........About Us........... */}
        <section id="AboutUs">
          <div className={styles.aboutBox}>
            <div>
              <img
                src={aboutUsimages}
                alt="aboutUs-images"
                className={styles.aboutUs_img}
              />
            </div>
            <div className={styles.aboutUs_txt}>
              <h1 className={styles.borderH1}>درباه ما</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد
              </p>
            </div>
          </div>
          <div className={styles.aboutUs_img2Box}>
            <img
              src={aboutUs_img2}
              alt="aboutUs-images"
              className={styles.aboutUs_img2}
            />
          </div>
          <img
            src={bgAboutUs}
            alt="aboutUs-Backgound"
            className={styles.aboutUs}
          />
        </section>

        {/* ..........Contact Us.............. */}
        <section className={styles.contactUs_Box} id="ContactUs">
          <h1 className={styles.borderH1}>تماس باما</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد
          </p>

          <button className={styles.requestBtn}>
            <a href="#">درخواست ارتباط</a>
          </button>
        </section>
      </main>
    </>
  );
};

export default Landing;
