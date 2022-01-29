import React from "react";

// Image
import Map from "../assets/img/map.png";

// Css
import styles from "./Language.module.css";

const Language = () => {
  return (
    <>
      <section className={styles.container}>
        <img src={Map} alt="Map Image" useMap="#areaMap" />
        <map name="areaMap">
          <area
            shape="rect"
            coords="965, 265, 890, 210"
            alt="Iran Image"
            href="#"
            className={styles.iranArea}
          />
          <area
            shape="rect"
            coords="940, 320, 850, 250"
            alt="Soudi Image"
            href="#"
            className={styles.soudiArea}
          />
        </map>
      </section>
    </>
  );
};

export default Language;
