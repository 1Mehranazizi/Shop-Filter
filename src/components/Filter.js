import React, { useState } from "react";
import Slider from "rc-slider";

//Styles
import styles from "./Filter.module.css";
import "rc-slider/assets/index.css";

const Filter = ({ asideFilterHandler, products, closeFilter }) => {
  //Products Color
  let colorArray = [];
  products.map((product) => colorArray.push(product.color));
  const newColor = [...new Set(colorArray)];

  //Products Brand
  let brandArray = [];
  products.map((product) => brandArray.push(product.brand));
  const newBrand = [...new Set(brandArray)];

  const [state, setState] = useState({
    priceValue: [500000, 10000000],
    color: "",
    brand: "",
  });

  const onChangeHandler = (value) => {
    setState({ ...state, priceValue: value });
  };

  const onClickHandler = (event) => {
    setState({
      ...state,
      [event.target.id.split(" ")[0]]: event.target.id.split(" ")[1],
    });
  };
  return (
    <div className={styles.filter}>
      <h4 className={styles.header}>فیلتر</h4>
      <div className={styles.section}>
        <div className={styles.price}>
          <p className={styles.title}>قیمت</p>
          <p className={styles.priceRange}>
            {state.priceValue[0].toLocaleString()}-
            {state.priceValue[1].toLocaleString()}تومان
          </p>
        </div>
        <Slider
          range
          allowCross={false}
          onChange={onChangeHandler}
          min={500000}
          max={10000000}
          step={100000}
        />
      </div>
      <div className={styles.section}>
        <p className={styles.title}>رنگ</p>
        <div className={styles.colors}>
          {newColor.map((color) => (
            <span
              className={
                color === state.color
                  ? `${styles.colorItem} ${styles.activeColor}`
                  : `${styles.colorItem}`
              }
              onClick={onClickHandler}
              key={color}
              id={`color ${color}`}
              style={{ backgroundColor: `${color}` }}
            ></span>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <p className={styles.title}>برند</p>
        <div className={styles.brands}>
          {newBrand.map((brand) => (
            <span
              className={
                brand === state.brand
                  ? `${styles.brand} ${styles.activeBrand}`
                  : `${styles.brand}`
              }
              onClick={onClickHandler}
              key={brand}
              id={`brand ${brand}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <button
        id="apply-filter"
        className={styles.applyFilter}
        onClick={() => {asideFilterHandler(state);closeFilter()}}
      >
        اعمال فیلتر
      </button>
    </div>
  );
};

export default Filter;
