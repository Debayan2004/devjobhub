import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-700">DevJobHub</h1>
      <div className="flex gap-6">
        <Link
          to="/"
          className="text-gray-700 border border-purple-500 px-4 py-2 rounded hover:bg-purple-100"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="text-gray-700 border border-purple-500 px-4 py-2 rounded hover:bg-purple-100"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-700 border border-purple-500 px-4 py-2 rounded hover:bg-purple-100"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

