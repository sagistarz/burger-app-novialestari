import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 right-0 h-20 bg-green-600 text-white flex items-center">
      <ul className="flex gap-4 text-lg font-bold container mx-auto">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}
