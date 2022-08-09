import Link from "next/link";
import { useRouter } from "next/router";

const navLinkStyle =
  "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
const activeNavLinkStyle = "text-white";
const NavLink = (props: { link: string; linkText: string }) => {
  const router = useRouter();
  return (
    <li>
      <Link href={props.link}>
        <a
          className={
            router.pathname.startsWith(props.link)
              ? activeNavLinkStyle
              : navLinkStyle
          }
        >
          {props.linkText}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
