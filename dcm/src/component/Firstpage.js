import React from "react";
import Navbar from "./Navbar";
import { Button } from "semantic-ui-react";
import { Navigate } from "react-router-dom";
import users from './Access.json'
import Navadmin from "./Navadmin";

const Firstpage = () => {
  const role = localStorage.getItem('role'); 
 
    

  return (
    <>
    {role==='admin' ? 
    <Navadmin />: 
    <div>
    <Navbar />
    </div>
    } 
      

      <center>
        <h1>Welcome to DCM Portal</h1>
        <img
          src="https://media.glassdoor.com/sqll/4568724/dcm-infotech-squarelogo-1629283057055.png"
          className="img-fluid"
          alt="Sample pic"
        />
    {/*    <Button onClick={() => loginWithRedirect()}>Log In</Button> */}
      </center>
    </>
  );
};

export default Firstpage;
