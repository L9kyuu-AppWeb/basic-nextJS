import React from "react";
import Link from "next/link";
import Styles from "./header.module.css";

export default function Header() {
  return (
    <header className={Styles.container}>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={Styles.item}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={Styles.item}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
        <li className={Styles.item}>
          <Link href="/userss">
            <a>404</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
