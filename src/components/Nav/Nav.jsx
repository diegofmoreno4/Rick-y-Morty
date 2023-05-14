import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"
import styles from "./Nav.module.css"

export default function Nav(props) {
  return (
    <div className={styles.navButtons}>
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">
      <button className={styles.button1}>About</button>
      </Link>
      <Link to="/home">
      <button className={styles.button2}>Home</button>
      </Link>
      <Link to="/favorites">
      <button className={styles.button3}>Favorites</button>
      </Link>
    </div>
  );
}
