import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul className="ordered-list">
          <li className="lists">
            <Link href="/">Home</Link>
          </li>
          <li className="lists">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
