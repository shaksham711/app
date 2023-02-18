import React from "react";
import Navbar from "./Navbar";
import Navadmin from "./Navadmin";
const Policy = () => {
  const role = localStorage.getItem("role");

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "training.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      {role==="admin" && role==="user"}?(
        
      ):(

      )


      {role === "admin" ? (
        <Navadmin />
      ) : (
        <div>
          <Navbar />
        </div>
      )}
      <center>
        <h1>Welcome to DCM Portal</h1>
        <h3>Click on below button to download Policy PDF File</h3>
        <button onClick={onButtonClick}>Download PDF</button>
      </center>
    </>
  );
};

export default Policy;
