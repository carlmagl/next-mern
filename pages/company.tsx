import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Company: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>For Bedrifter</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Bedrifter</p>
        {/* <Filter/> */}
        {/* <Events/> */}
      </main>
    </div>
  );
};

export default Company;
