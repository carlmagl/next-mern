import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Student: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Students - NC</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Students</p>
        {/* <Filter/> */}
        {/* <Events/> */}
      </main>
    </div>
  );
};

export default Student;
