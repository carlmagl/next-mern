import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://carl-mern.herokuapp.com/users/62c2ddd1dff53f41fedc9fd3`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiY2FybCIsImlhdCI6MTY1NzYyNzY4MSwiZXhwIjoxNjU3NjMxMjgxfQ.qYEaUsGSA4UnQm1r54jrnY95bmOr1z2G7bNOaI3jAJ4"`,
//         Origin: "http://localhost:3000",
//       },
//     }
//   );
//   const data = await res.json();
//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return { props: { data } };
// }

const Profile: NextPage = () => {
  const [data, setData] = useState<{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  }>({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    const token = window.localStorage.getItem("jwtToken");
    const userId = window.localStorage.getItem("userId");
    console.log(token, userId);
    fetch(`https://carl-mern.herokuapp.com/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Origin: "http://localhost:3000",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Profil</p>
        <p>Username: {data.username}</p>
        <p>FirstName: {data.firstName}</p>
        <p>LastName: {data.lastName}</p>
        <p>Email: {data.email}</p>
      </main>
    </div>
  );
};

export default Profile;
