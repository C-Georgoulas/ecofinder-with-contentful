import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/maps">Maps</Link>
        </li>
        <li>
          <Link href="/news">Global News</Link>
        </li>
        <li>
          <Link href="/blog">Our Blog</Link>
        </li>
        {/* <li>
          <Link href='/about'>About</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
