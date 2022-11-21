import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  const gitHubLink = "https://github.com/HaktanAlbayrak";

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href={gitHubLink} target="_blank" className={styles.about}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
