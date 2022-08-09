import type { NextPage } from "next";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const inputStyling =
  "border-2 border-indigo-200 rounded-md  hover:border-dotted hover:border-indigo-400";

interface LoginCredentials {
  username: string;
  password: string;
}

const fetchToken = (loginCredentials: LoginCredentials) => {
  fetch("https://carl-mern.herokuapp.com/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginCredentials.username,
      password: loginCredentials.password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.localStorage.setItem("jwtToken", data.token);
      window.localStorage.setItem("userId", data.id);
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    });
};
const fetchPosts = () => {
  const token = window.localStorage.getItem("jwtToken");
  fetch("https://carl-mern.herokuapp.com/posts/list", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const initialValues = {
  username: "",
  password: "",
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
const Login: NextPage = () => {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentials>(initialValues);
  console.log(loginCredentials);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-sm font-medium text-gray-900">Login here</h1>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
          method="GET"
          action=""
        >
          <label htmlFor="username">Username:</label>
          <input
            className={inputStyling}
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
          <label htmlFor="username">Password:</label>
          <input
            className={inputStyling}
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <button
            className="rounded-full border-2 border-indigo-200 hover:border-indigo-400"
            onClick={(e) => {
              e.preventDefault();
              fetchToken(loginCredentials);
              //   fetchPosts();
            }}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
