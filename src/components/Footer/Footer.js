import React from "react";

import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/insta.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Phone from "../../assets/icons/phone.svg";

import styles from "./Footer.module.css";

const Footer = ({}) => (
  <div className={styles.footerContainer}>
    <div className={styles.footerItemsContainer}>
      <div className={styles.nameContainer}>
        <p className={styles.siteName}>zakaz@pizza.com</p>
        <span className={styles.border}></span>
      </div>

      <div className={styles.phoneContainer}>
        <img src={Phone} alt="Phone" className={styles.phoneImg}></img>
        <a href="tel:+380444444444" className={styles.phoneFooter}>
          +38044 444 44 44
        </a>
      </div>
      <div className={styles.socialsContainer}>
        <span className={styles.iconsContainer}>
          <a
            href=" https://www.instagram.com/goitclub/?hl=ru"
            className={styles.link}
          >
            <img
              src={Instagram}
              alt="Instagram"
              className={styles.linkImg}
            ></img>
          </a>
        </span>
        <span className={styles.iconsContainer}>
          <a href="https://twitter.com/goitclub" className={styles.link}>
            <img src={Twitter} alt="Twitter" className={styles.linkImg}></img>
          </a>
        </span>
        <span className={`${styles.iconsContainer} ${styles.facebook}`}>
          <a href="https://www.facebook.com/goITclub" className={styles.link}>
            <img src={Facebook} alt="youtube" className={styles.linkImg}></img>
          </a>
        </span>
        <span className={styles.iconsContainer}>
          <a
            href="https://www.linkedin.com/company/goit---простой-путь-в-it/"
            className={styles.link}
          >
            <img src={Linkedin} alt="Linkedin" className={styles.linkImg}></img>
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Footer;
