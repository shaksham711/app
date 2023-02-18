import React, { useEffect } from "react";
import Calendar from "calendar-reactjs";
import Navbar from "./Navbar";

const Attendance = () => {
  const role = localStorage.getItem("role");

  // useEffect(() => {
  //   if (role !== 'user') {
  //     // Redirect the user if they are not an admin
  //     return window.location.assign("http://localhost:3000/Firstpage");
  //   }
  // }, [role]);
  return (
    <>
      {role === "admin" ? (
        <Navadmin />
      ) : (
        <div>
          <Navbar />
        </div>
      )}
      <Calendar
        onCellClick={(val) => console.log(val)}
        onClick={() => alert("Attendance marked")}
        month={{
          date: "2023-01-01",
          days: [
            { date: "2023-01-01", status: "Off" },
            { date: "2023-01-02", status: "present" },
            { date: "2023-01-03", status: "present" },
            { date: "2023-01-04", status: "absent" },
            { date: "2023-01-05", status: "present" },
            { date: "2023-01-06", status: "present" },
            { date: "2023-01-07", status: "Off" },
            { date: "2023-01-08", status: "Off" },
            { date: "2023-01-09", status: "present" },
            { date: "2023-01-10", status: "present" },
            { date: "2023-01-11", status: "present" },
            { date: "2023-01-12", status: "absent" },
            { date: "2023-01-13", status: "present" },
            { date: "2023-01-14", status: "Off" },
            { date: "2023-01-15", status: "Off" },
            { date: "2023-01-16", status: "present" },
            { date: "2023-01-17", status: "present" },
            { date: "2023-01-18", status: "present" },
            { date: "2023-01-19", status: "present" },
            { date: "2023-01-20", status: "present" },
            { date: "2023-01-21", status: "Off" },
            { date: "2023-01-22", status: "Off" },
            { date: "2023-01-23", status: "present" },
            { date: "2023-01-24", status: "present" },
            { date: "2023-01-25", status: "present" },
            { date: "2023-01-26", status: "leave" },
            { date: "2023-01-27", status: "present" },
            { date: "2023-01-28", status: "Off" },
            { date: "2023-01-29", status: "Off" },
            { date: "2023-01-30", status: "present" },
            { date: "2023-01-31", status: "present" },
          ],
        }}
        emptyCellStyle={{ backgroundColor: "white" }}
        status={{
          present: {
            labelStyle: {
              backgroundColor: "green",
              color: "black",
              borderRadius: "8px",
              padding: "0px 0px 3px 0px",
            },
          },
          absent: {
            labelStyle: {
              backgroundColor: "red",
              color: "black",
              borderRadius: "8px",
              padding: "0px 0px 3px 0px",
            },
          },
          Off: {
            labelStyle: {
              backgroundColor: "yellow",
              color: "black",
              borderRadius: "8px",
              padding: "0px 0px 3px 0px",
            },
          },
          leave: {
            labelStyle: {
              backgroundColor: "orange",
              color: "black",
              borderRadius: "8px",
              padding: "0px 0px 3px 0px",
            },
          },
        }}
      />
    </>
  );
};
export default Attendance;
