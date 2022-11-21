"use client";
import React from "react";

import styles from "./styles.module.css";

const Error = () => {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <h1>Error!!</h1>
      </div>
      <div className={styles.notExist}>
        <h2>oops something went wrong...</h2>
      </div>
    </div>
  );
};

export default Error;
