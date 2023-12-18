import cnetechImage from "../assets/cnetech.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-900">
        <div className="navbar relative  text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white hover:text-yellow-500 bg-gray-900 rounded-box w-48"
              >
                <li>
                  <Link className="font-semibold" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold" to="/services">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <img src={cnetechImage} className="h-8 mr-2" />
            <Link
              to="/"
              className=" rounded-md p-2 normal-case text-xl font-mono font-semibold hover:bg-yellow-500 hover:text-gray-900"
            >
              CNETECH SYSTEMS
            </Link>
          </div>
          <>
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu menu-horizontal px-1 ">
                <li>
                  <Link
                    className="hover:bg-yellow-500 hover:text-gray-900 font-semibold"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:bg-yellow-500 hover:text-gray-900 font-semibold"
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:bg-yellow-500 hover:text-gray-900 font-semibold"
                    to="/services"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:bg-yellow-500 hover:text-gray-900 font-semibold"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-end flex gap-2">
              <Link
                to="#"
                className="rounded-md px-4 py-2 text-gray-900 bg-gray-900 font-mono font-semibold hover:text-gray-900 hover:bg-gray-900"
              ></Link>
            </div>
          </>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
