import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const External: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>External - NC</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>External</p>
        {/* <Filter/> */}
        {/* <Events/> */}
      </main>
    </div>
  );
};

export default External;
