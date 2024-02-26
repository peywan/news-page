import Link from "next/link";

const Header = () => {
  return (
    <header className=" text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold font-mono">Newsify</h1>
      <nav className="flex-grow flex justify-end">
        <ul className="flex space-x-10 font-mono text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sport">Sport</Link>
          </li>
          <li>
            <Link href="/culture">Culture</Link>
          </li> 
          <li>
            <Link href="/bookmarkedArticles">Bookmarked Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
