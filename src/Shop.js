//Components
import Search from "./components/Search";
import Product from "./components/Product";

//Styles
import styles from "./Shop.module.css";

//Data
import { products } from "./data/data";

import React from "react";

console.log(products);

const Shop = () => {
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.row}>
        <aside></aside>
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
