import React from "react";

//Styles
import styles from "./Product.module.css";

//Icons
import HeartIcon from "../assets/img/Icon heart.svg";
import ShareIcon from "../assets/img/share.svg";

const Product = ({data}) => {
  return (
    <div className={styles.product}>
      <div className={styles.cardImage}>
        <div className={styles.headerButton}>
          <span className={styles.addToFavorite}>
              <img src={HeartIcon} alt="heart" />
          </span>
          <span className={styles.share}>
              <img src={ShareIcon} alt="share" />
          </span>
        </div>
        <img src={data.image} alt={data.title} className={styles.productImage} />
      </div>
      <div className={styles.cardBody}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.price}>{data.price.toLocaleString()} تومان</p>
      <button className={styles.addToCard}>افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default Product;
