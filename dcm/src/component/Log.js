import React, {useState, useEffect} from "react";
import "./Login.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import users from "./Access.json";
import { Navigate } from "react-router-dom";

const Log = () => {
  
  // {
    /*  componentDidMount() {
    console.log(test)
  }  */
  // }
  /*  const [user,setUser]=useState("")
  const [password,setPassword]=useState("")
  const [userErr,setUserErr]=useState(false)
  const [passErr,setPassErr]=useState(false)
  const loginHandle=(e) =>{
     
    if(user.length<3 || password.length<3)
    {
      alert("Enter Email and Password")
    }
    else{
      alert("Welcome To DCM Portal")
    }
    e.preventDefault()

  }

  const userHandler=(e)=>{
    let item=e.target.value;
    if(item.length<3)
    {
      setUserErr(true)
    }
    else{
      setUserErr(false)
    }
    setUser(item)
  }

  const passwordHandler=(e)=>{
    let item=e.target.value;
    if(item.length<3)
    {
      setPassErr(true)
    }
    else{
      setPassErr(false)
    }
    setPassword(item)
  }
  */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated]=useState(false)
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // const users = [
      // { email: 'rahul@gmail.com', password: 'password', role: 'admin' },
      // { email: 'shaksham@gmail.com', password: 'password', role: 'user' },
    // ];

    // Check if the entered email and password match the user's credentials
    const user = users.users.find(
      (u) => u.email === email && u.password === password
    );


    if(user){
      setRole(user.role);
      setIsAuthenticated(true);
      localStorage.setItem('role', user.role);
    } else {
      alert('Invalid username or password');
    }

    };

    // if (user) {
      // localStorage.setItem('isLoggedIn', true);
      // localStorage.setItem('role', user.role);
      // window.location.assign("http://localhost:3000/Firstpage");
    // } else {
      // alert('Incorrect email or password. Please try again.');
    // }  
  
  if (isAuthenticated) {
    return <Navigate to="/Firstpage" />
   }  

  

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-4 col-xl-5">
              <img
                src="https://media.glassdoor.com/sqll/4568724/dcm-infotech-squarelogo-1629283057055.png"
                className="img-fluid"
                alt="Sample pic"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <p className="lead fw-normal mb-0 me-3">Sign in </p>
                <br></br>

                {/* Email input */}
                <div className="form-outline mb-2">
                  <input
                    type="email"
                    id="form3Example3"
                    value={email}
                    className="form-control form-control-md"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                  {/*  {userErr?<span>Invalid Email</span>:""} */}
                  {/*  <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-md"
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  {/*  {passErr?<span>Invalid Password</span>:""} */}
                  {/*  <label className="form-label" htmlFor="form3Example4">Password</label> */}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 ">
                  {/*  <Link to="/Firstpage"> */}
                  <Button type="submit" className="btn btn-primary btn-lg">
                    Log in
                  </Button>
                  {/* </Link> */}
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Log;
