import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Styles from "./layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: String;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={Styles.container}>
        <Header />
        <div className={Styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
