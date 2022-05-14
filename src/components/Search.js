import React, { useState } from "react";

//Stytles
import styles from "./Search.module.css";

//Icons
import SearchIcon from "../assets/img/search.svg";
import SortIcon from "../assets/img/sliders.svg";

const Search = ({headerFilterHandler , filterd}) => {
  const [openSort, setOpenSort] = useState(false);
  return (
    <div className={styles.searchBox}>
      <button className={styles.searchIcon}>
        <img src={SearchIcon} alt="search-icon" />
      </button>
      <input
        type="text"
        placeholder="جستجو..."
        className={styles.searchInput}
        name="search"
        onChange={headerFilterHandler}
        value={filterd.search}
      />
      <div
        className={
          openSort ? `${styles.sortOpen} ${styles.sort}` : `${styles.sort}`
        }
        onClick={() => setOpenSort(!openSort)}
      >
        <button className={styles.sortIcon}>
          <img src={SortIcon} alt="sort-icon" />
        </button>
        <div className={styles.sortBox}>
          <span className={styles.sortItem} onClick={headerFilterHandler} id="date"> جدیدترین</span>
          <span className={styles.sortItem} onClick={headerFilterHandler} id="top-sells"> ارزان ترین</span>
          <span className={styles.sortItem} onClick={headerFilterHandler} id="top-seller"> پرفروش ترین</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
