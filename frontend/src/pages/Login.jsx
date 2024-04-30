import React, {useState, useEffect} from "react";
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'
import logo from "../assets/logo.svg"
import "../styles/login.css"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { loginRoute } from "../utils/ApiRoutes";

function Login() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
      navigate("/")
    }
  }, [])
  const [values, setValues] = useState({
    phonenumber: "",
    password: ""
  })
  const toastOptions = {
    position: "bottom-right",
    autoClose:5000,
    pauseOnHover: true,
    theme:"dark"
  }
  const handleValidation = () =>{
    const { phonenumber, password} = values;

    
    if(phonenumber.length !== 10){
      toast.error("Phone number should be of atleast 10 digit.", toastOptions)
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
        const { phonenumber, password} = values ;
        const response = await axios.post(loginRoute, {
          phonenumber,
          password,
        })
        if (response.data.status) {
          localStorage.setItem("chat-app-user",JSON.stringify(response.data.existingUser))
          toast.success(response.data.message, toastOptions);
          navigate("/")
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
        toast.error(`Something went wrong. ${error}`, toastOptions);
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
            <img C src={logo} alt="app-logo" />
          </div>
          
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
          
          <button type="submit" className="login-btn">Login</button>
          <span>Don't have an account? &nbsp;&nbsp;
            <Link to="/auth/v1/560qw108/register">Register</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}



export default Login;
