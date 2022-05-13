//Components
import Search from './components/Search';

//Styles
import styles from "./Shop.module.css";

import React from 'react';

const Shop = () => {
    return (
        <div className={styles.container}>
            <Search />
        </div>
    );
};

export default Shop;