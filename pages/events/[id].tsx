import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Event: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>{id} - NC</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>{id}</p>
      </main>
    </div>
  );
};

export default Event;
