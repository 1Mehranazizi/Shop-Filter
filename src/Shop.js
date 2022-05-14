import React, { useEffect, useState } from "react";
//Components
import Search from "./components/Search";
import Product from "./components/Product";
import Filter from "./components/Filter";

//Styles
import styles from "./Shop.module.css";

//API
import apiFunc from "./api/api";

const Shop = () => {
  const [productsMain, setProducts] = useState([]);
  let products = productsMain;
  const [filterd, setFilterd] = useState({
    sortBy: "date",
    search: "",
    priceValue: [500000, 10000000],
    color: "",
    brand: "",
  });

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await apiFunc());
    };
    fetchAPI();
  }, []);

  const headerFilterHandler = (event) => {
    if (event.target.name === "search") {
      setFilterd({ ...filterd, search: event.target.value });
    } else {
      setFilterd({
        ...filterd,
        sortBy: event.target.id,
      });
    }
  };
  const asideFilterHandler = (state) => {
    setFilterd({
      ...filterd,
      priceValue: state.priceValue,
      color: state.color,
      brand: state.brand,
    });
  };

  const shopFilterProducts = (state) => {
    if (state.sortBy === "date") {
      products = products.sort(
        (a, b) => parseFloat(a.id) - parseFloat(b.id)
      );
    }
    if (state.sortBy === "top-sells") {
      products = products.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    }
    if (state.sortBy === "top-seller") {
      products = products.sort(
        (a, b) => parseFloat(b.sells) - parseFloat(a.sells)
      );
    }
    if (state.search.length) {
      products = products.filter((product) =>
        product.title.includes(state.search)
      );
    }
    if (state.brand.length) {
      products = products.filter(
        (product) => product.brand === state.brand
      );
    }
    if (state.color.length) {
      products = products.filter(
        (product) => product.color === state.color
      );
    }
    if (state.priceValue.length) {
      products = products.filter(
        (product) =>
          product.price >= state.priceValue[0] &&
          product.price <= state.priceValue[1]
      );
    }
  };

  shopFilterProducts(filterd);

  console.log(products);
  console.log(filterd);

  return (
    <div className={styles.container}>
      <Search headerFilterHandler={headerFilterHandler} filterd={filterd} />
      <div className={styles.row}>
        <aside className={styles.aside}>
          <Filter asideFilterHandler={asideFilterHandler} products={productsMain} />
        </aside>
        <main className={styles.products}>
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Shop;
