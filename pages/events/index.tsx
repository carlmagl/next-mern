import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import EventCard, { NavetEvent } from "../../components/Events/EventCard";
import styles from "../../styles/Home.module.css";

const PAGE_TITLE = "Arrangementer";

export async function getServerSideProps() {
  const res = await fetch(`https://carl-mern.herokuapp.com/events`, {
    method: "GET",
    headers: {
      Origin: "http://localhost:3000",
    },
  });
  const data = await res.json();

  return { props: { data } };
}

const Events = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const events = data.data;
  console.log(events);
  return (
    <div className={styles.container}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={"min-h-[100vh] flex flex-col justify-start items-center"}
      >
        <div className="mt-6 w-5/6 flex flex-col items-center">
          <h2 className="font-medium text-navetBlue text-6xl text-center">
            {PAGE_TITLE}
          </h2>
          <p className="text-center mt-8">Vår 2022</p>
          {events &&
            events.map((event: NavetEvent, index: number) => (
              <EventCard event={event} key={index} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Events;
