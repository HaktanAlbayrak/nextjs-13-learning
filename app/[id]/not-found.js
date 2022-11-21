import React from "react";

import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <h1>Error 404</h1>
      </div>
      <div className={styles.notExist}>
        <h2>Blog doesn't exist</h2>
      </div>
    </div>
  );
};

export default NotFound;
