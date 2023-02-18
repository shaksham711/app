import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import users from './Access.json'

const Navadmin = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Firstpage">
            DCM Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Attendance"
                >
                  Attendance
                </Link>
              </li> */}
              {/*  <li className="nav-item">
                <Link className="nav-link" to="/Todo">Todo List</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/Task">
                  Task List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Policy">
                  Policy
                </Link>
              </li>
              
              {/* <li className="nav-item"> */}
                {/* <Link className="disabled-link" to="/Attendanceexport"> */}
                  {/* Export */}
                {/* </Link> */}
              {/* </li> */}

              <li className="nav-item">
                <Link className="nav-link active" to="/Attendanceeexport">
                  Export
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <Button type="button" className="btn btn-primary btn-xs">
                    Log Out
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navadmin;