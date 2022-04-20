import React from "react";
import logo from "../assests/images/logo.jpeg";
import teacher1 from "../assests/images/teacher1.jpeg";
import teacher2 from "../assests/images/teacher2.jpeg";
import teacher3 from "../assests/images/teacher3.jpeg";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row w-100">
          <div className="col-8">
            <div className="text">
              <h1 className="display-2">CoachBudy</h1>
              <p>
                Sunt pariatur do est duis sunt nostrud. Fugiat enim ex voluptate
                magna sit pariatur veniam sint. Sint velit quis minim duis ad
                elit excepteur.
              </p>
            </div>
          </div>
          <div className="col-4">
            <img src={logo} alt="Logo Image" />
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <h1 className="display-4">About Our Teachers</h1>
          <div className="col-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={teacher1}
                alt="Teacher Profile Image"
                className="card-img-top"
              />
              <div className="card-body">
                <div className="card-title">Nia Bonolo</div>
                <div className="card-body">
                  Mollit aliquip magna qui officia et aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={teacher2}
                alt="Teacher Profile Image"
                className="card-img-top"
              />
              <div className="card-body">
                <div className="card-title">Nia Bonolo</div>
                <div className="card-body">
                  Mollit aliquip magna qui officia et aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={teacher3}
                alt="Teacher Profile Image"
                className="card-img-top"
              />
              <div className="card-body">
                <div className="card-title">Nia Bonolo</div>
                <div className="card-body">
                  Mollit aliquip magna qui officia et aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "4rem",
          width: " 100vw",
          backgroundColor: "#14293d",
          height: "20rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="row w-100 px-5 ">
          <div className="col-7">
            <h1 className="display-3 text-white">About us</h1>
            <p className="text-white">Address : </p>
            <span className="text-white">
              <small>368 Quarry Drive</small>
              <br />
              <small>Selma</small>
              <br />
              <small>AL</small>
              <br />
              <small>Alabama</small>
              <br />
              <small>36703</small>
              <br />
            </span>
          </div>
          <div className="col-5">
            <img src={logo} alt="Logo image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
