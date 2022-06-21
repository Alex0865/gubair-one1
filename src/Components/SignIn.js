import React from "react";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form.css";
import { useEffect } from "react";


import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
  


 
  

const SignIn = ({ submitForm }) => {
 
  
  
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const EyeControl = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
    
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    reset();
    sandbox();
    navigate('/welcome');
    //setInputvalues({phonenumber:data.phonenumber,password:data.password})
    
  };
  

  const sandbox = () => {
    toast.success("Successfully Signed In",{autoClose:5000});
  }
  const resend = () => {
    toast.warning("Verification link is sent to your phone, Please verify it",{autoClose:5000});
  }
  const check = () => {
    toast.warning("Your signed on the page ",{autoClose:5000});
  }
  //*********************        API         ******************************** */
  const [formValues,setFormValues] = useState({});
const [inputvalues, setInputvalues] = useState({phonenumber:"",password:""});

function handleClick() {
  
  fetch('http://localhost:8000/', {  

  method: 'GET',
  mode: 'cors',
  body: JSON.stringify() 

})

  .then(response => response.json())
  .then((data) => {
 
   for(let keys in data){
    
    
    console.log(data[keys].phonenumber,data[keys].password,inputvalues.phonenumber)
    if(data[keys].phonenumber == inputvalues.phonenumber){
      if(data[keys].password == inputvalues.password){
        
        navigate('/welcome')
       
       break;
      }
     
    }
    
   }
   if(inputvalues.phonenumber.length>0){
    
}
  })
 
  .catch(err => {
   console.log(err)
   
  // alert("invalid username ")
  })

 }
useEffect(() =>{
   handleClick();
   
},[inputvalues])
const changeHandler = (e) => {
  
  console.log(e.target.value,e.target.name)
}

//********************************************************************************** */

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="main">
            <button className="arrow"  >
              <h2>
                <FaArrowLeft />
              </h2>
            </button>
            <h2 className="sub2">Sign In</h2>
            <button className="menu">
              <img src="symbol.png" className="track" />
            </button>
          </div>
          <p className="lets">Let's verify that it's you</p>
        </div>
        
        <div className="main-div">
          <div>
            <label className="label-p">Phone Number </label>
          </div>

          <div className="input-p">
            <div className="p-code">
              <label>+91</label>
            </div>

            <div className="input-n">
              <input
                type="text"
                name="phnmbr"
                placeholder="00000 00000"
                maxLength={10}
                className="input-field"
                onChange={changeHandler}
                value={formValues?.phonenumber}
                autoComplete="off"
                {...register("phnmbr", {
                  required: "*Phone number required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "*Only numbers are allowed",
                  },
               
                  minLength: {
                    value: 10,
                    message: "*Phone number must be 10 digits ",
                  }
                  
                  
                })}
              />
            </div>
          </div>
          {errors.phnmbr && (
            <span className="warning">{errors.phnmbr.message}</span>
          )}
        </div>
        
        <div className="input-tp">
          <div>
            <label className="label-p">Temporary Password</label>
          </div>

          <div className="input-p">
            <div className="input-get">
              <input
                id="tempassword"
                type={passwordType}
                name="password"
                onChange={changeHandler}
                value={formValues?.password}
                className="input-set"
                placeholder="* * * *"
                autoComplete="off"
                
                {...register("password", {
                  
                  required: "*Password Required",
                  minLength:
                  {
                    value:8,message:"*Minlength is 8 digit"
                  }

                  
                })}
              />
            </div>

            <div className="eye">
              <button
                className="eye-click"
                onClick={()=>{EyeControl()}}
                type="button"
              >
                {passwordType === "password" ? (
                  <span>
                    
                    <Icon icon={eyeOff} />
                  </span>
                ) : (
                  <span>
                    
                    <Icon icon={eye} />
                  </span>
                )}
              </button>
            </div>
          </div>
          {errors.password && (
            <small className="warning">{errors.password.message}</small>
          )}
        </div>
        <br></br>
        <br></br>
        <div>
    <div className='container'>
      <div className='checkbox-style'>
      <div className="round" >
         <input type="checkbox" id="checkbox"  />
          <label for="checkbox" onClick={()=>{check()}} ></label>
      </div>
      <div ><label className='staysign'>
      Stay Signed in</label></div></div>
</div>
      
<p className='forgot'>
Forget your Password? Click to <button  onClick={() =>{resend()}} className="resend">Resend</button>
</p>
      </div>
        <div>
          <footer>
            <button className="button" type="submit"  >
              SIGN IN
            </button>
            <ToastContainer 
            autoClose={5000}
            />
            <p className='forgot'>
Not a member? <button  onClick={ () => {navigate('/signup')}} className="resend">Sign Up</button>
</p>
<div className="warning">{message ? <p>{message}</p> : null}</div>
            
            <br></br>
            <p className="copy">
              <sub>Copyright © GubairOne</sub>
            </p>
          </footer>
        </div>
      </form>
    </div>
  );
};

export default SignIn
