import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-xl  bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/This_is_the_logo_of_NIT_Calicut.svg/1200px-This_is_the_logo_of_NIT_Calicut.svg.png"
            class="logo"
            alt="nit logo"
          />
          Central Library{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav navstyle">
            <NavLink to="/" />
            <a class="nav-link" href="#">
              NITC Website
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Search
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/ebooks">
                    Ebooks
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/pjournals">
                    Print Journals
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ojournals">
                    Online Journals
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/dailies">
                    Dailies & Magazines
                  </NavLink>
                </li>
              </ul>
            </li>
            <a class="nav-link" href="#">
              About US
            </a>
            <a class="nav-link" href="#">
              Knimbus
            </a>
            <a class="nav-link" href="#">
              Digital Library
            </a>
            <a class="nav-link" href="#">
              Book Recommendation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
