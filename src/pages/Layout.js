import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/aboutCouching" className="nav-link">
                  Coaching Details
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offered" className="nav-link">
                  Offered Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  links_container: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-around",
  },
  link_tag: {
    background: "none",
    textDecoration: "none",
    border: " 1px solid #ffff",
    padding: "5px 10px",
    backgroundColor: "dodgerblue",
    color: "#fff",
  },
};

export default Layout;
