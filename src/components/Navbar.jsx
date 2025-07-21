import { SlLogin } from "react-icons/sl";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('fakeToken');

  return (
    <nav>
      <Link to={'/'}>
        <h1>📋 Task Tracker</h1>
      </Link>
      {!isLoggedIn && (
        <button>
          <Link to="/login">
            <SlLogin />
          </Link>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
