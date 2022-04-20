import React from "react";
import { Outlet, Link } from "react-router-dom";
import profile from "../assests/images/logo.jpeg";
const Login = () => {
  return (
    <div style={styles.component}>
      <div style={styles.subMain}>
        <div style={styles.imageContainer}>
          <img src={profile} alt="profile" style={styles.img_tag} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            style={styles.input_tag}
            required={true}
          />
        </div>
        <div className="second-input">
          <input
            type="password"
            placeholder="password"
            style={styles.input_tag}
            required={true}
          />
        </div>
        <Link to="/aboutCouching" className="nav-link">
          Login
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

const styles = {
  component: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgb(255, 255, 255)",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  subMain: {
    display: "flex",
    height: "340px",
    width: "21vw",
    padding: " 10px 0",
    borderRadius: "2%",
    backgroundColor: "#ffff",
    border: "5px solid skyblue",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  img_tag: {
    width: "50%",
  },
  input_tag: {
    width: "16vw",
    height: " 40px",
    border: "4px solid lightgreen",
  },
  btn: {
    backgroundColor: "#00ACEB",
    color: "white",
    border: "none",
    fontSize: "2em",
  },
};

export default Login;
