import { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Footer: NextPage = () => {
  return (
    <footer className="flex flex-1 bg-navetBlue justify-start align-center py-8">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="">
          <h4 className="text-white pl-8">NC</h4>
          <p className="text-white pl-8">Postboks 1080 Blindern</p>
          <p className="text-white pl-8">Institutt for informatikk</p>
          <p className="text-white pl-8">0316 Oslo, Norway</p>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
