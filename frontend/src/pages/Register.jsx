import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
import logo from "../assets/logo.svg"
import "../styles/register.css"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { registerRoute } from "../utils/ApiRoutes";

function Register() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
      navigate("/")
    }
  }, [])
  const [values, setValues] = useState({
    username: "",
    phonenumber: "",
    password: "",
    confirmPassword: ""
  })
  const toastOptions = {
    position: "bottom-right",
    autoClose:5000,
    pauseOnHover: true,
    theme:"dark"
  }
  const handleValidation = () =>{
    const {username, phonenumber, password, confirmPassword} = values;

    if(password!== confirmPassword){
      toast.error("Password and Confirm Password should be same.", toastOptions)
      return false
    }
    if(phonenumber.length !== 10){
      toast.error("Phone number should be of atleast 10 digit.", toastOptions)
      return false
    }
    if(username.length < 3){
      toast.error("Username should be more than 3 charecters.", toastOptions)
      return false
    }
    if(password.length < 5){
      toast.error("Password should be equal or greater than 5 charecters.", toastOptions)
      return false
    }
    return true
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(handleValidation()){
        const {username, phonenumber, password} = values ;
        const response = await axios.post(registerRoute, {
          username,
          phonenumber,
          password,
        })
        if (response && response.data && response.data.status) {
          toast.success(response.data.message, toastOptions);
          localStorage.setItem("chat-app-user",JSON.stringify(response.data.user))
          
          navigate("/auth/v1/671uy885/login")
        } else {
          toast.error(response.data.message, toastOptions);
        }
      }
    }
    catch(error){
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        toast.error(message, toastOptions);
      } else {
        toast.error("Something went wrong.", toastOptions);
      }
    }
    
    
  };
  const handleChange = (e) =>{
    setValues({...values, [e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img onClick={()=>navigate("/home")}  src={logo} alt="app-logo" />
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            name="phonenumber"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="register-btn">Register</button>
          <span>Already have an account? &nbsp;&nbsp;
            <Link to="/auth/v1/671uy885/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}



export default Register;
