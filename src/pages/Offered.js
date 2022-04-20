import React from "react";
import html from "../assests/images/html.jpeg";
import css from "../assests/images/css.jpeg";
import nodejs from "../assests/images/nodejs.jpeg";
import ror from "../assests/images/ror.jpeg";
import python from "../assests/images/python.jpeg";
import reactjs from "../assests/images/react.jpeg";
import logo from "../assests/images/logo.jpeg";
const Offered = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <h1>Offered Courses By Us</h1>
          <hr />
          <div className="col-4" style={{ marginBottom: "2rem" }}>
            <div class="card  h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={html}
                className="card-img-top"
                alt="Course Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4" style={{ marginBottom: "2rem" }}>
            <div class="card  h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={css}
                className="card-img-top"
                alt="Course Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4" style={{ marginBottom: "2rem" }}>
            <div class="card  h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={nodejs}
                className="card-img-top"
                alt="Course Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4" style={{ marginBottom: "2rem" }}>
            <div class="card  h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={ror}
                className="card-img-top"
                alt="Course Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4" style={{ marginBottom: "2rem" }}>
            <div class="card  h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={reactjs}
                className="card-img-top"
                alt="Course Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4" style={{ marginBottom: "2rem" }}>
            <div class="card  h-100" style={{ width: "18rem" }}>
              <img
                style={{ minHeight: "300px", maxHeight: "300px" }}
                src={python}
                className="card-img-top"
                alt="Course Thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
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

export default Offered;
