import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">News Site</h1>
      <nav className="flex-grow flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Sport</Link>
          </li>
          <li>
            <Link href="/contact">Culture</Link>
          </li>
          <li>
            <Link href="/contact">Business</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
