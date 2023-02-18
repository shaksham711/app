import React, { useRef, useEffect} from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import "./Attendanceexport.css";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Navadmin from "./Navadmin";


export default function Attendanceexport() {
  const role = localStorage.getItem('role');  
  
  //   useEffect(() => {
  //     if (role !== 'admin') {
  //       // Redirect the user if they are not an admin
  //       return <Navigate to="/Log" />
  //       // console.log(role);
  //     }
  //   }, [role]);
  // const tableRef = useRef(null);

  return (
    <>
    {role==='admin' ? 
    <Navadmin />: 
    <div>
    <Navbar />
    </div>
    } 
    <div>
        <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <button id="btn"> Export To Excel </button>   
      </DownloadTableExcel>
      <table ref={tableRef} id="customer">
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>02-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>03-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>04-01-2023</td>
            <td>absent</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>05-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>06-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>07-01-2023</td>
            <td>Off</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>08-01-2023</td>
            <td>Off</td>
          </tr><tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>09-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>10-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>11-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>12-01-2023</td>
            <td>absent</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>13-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>14-01-2023</td>
            <td>Off</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>15-01-2023</td>
            <td>Off</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>16-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>17-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>18-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>19-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>20-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>21-01-2023</td>
            <td>Off</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>22-01-2023</td>
            <td>Off</td>
          </tr><tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>23-01-2023</td>
            <td>present</td>
          </tr><tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>24-01-2023</td>
            <td>present</td>
          </tr><tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>25-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>26-01-2023</td>
            <td>leave</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>27-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>28-01-2023</td>
            <td>Off</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>29-01-2023</td>
            <td>Off</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>30-01-2023</td>
            <td>present</td>
          </tr>
          <tr>
            <td>Shaksham</td>
            <td>Sharma</td>
            <td>31-01-2023</td>
            <td>present</td>
          </tr>

        </tbody>
      </table>
    </div>
    </>
  );
}