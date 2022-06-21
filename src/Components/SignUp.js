import React from "react";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";



const SignUp = ({ submitForm }) => {
  const navigate = useNavigate();

  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const phoneRegExp = /^[0-9]*$/;
  const passwordRegEx =/^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const formSchema = Yup.object().shape({
    phonenumber: Yup.string()
      .required("* Phone Number is required")
      .matches(phoneRegExp, "* Numeric only")
      .min(10, "* Phone Number should be 10 digits"),
    password: Yup.string()
      .required("*Password is required")
      .matches(passwordRegEx, " *password should match the condtion ")
      .min(8, " * Minimum 8 charactors required"),
    confirmPwd: Yup.string()
      .required(" * Password is required")
      .oneOf([Yup.ref("password")], "* Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  
  const onSubmit = (data) => {
    
    
    console.log(JSON.stringify(data, null, 1));
    reset();
handleClick({phonenumber:data.phonenumber,password:data.password});
   
    
    return false;
  };

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
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

  const sandbox = () => {
    toast.success("Successfully Signed In", { autoClose: 5000 });
  };
  const resend = () => {
    toast.warning("Verification link is sent to your phone, Please verify it", {
      autoClose: 5000,
    });
  };
  const check = () => {
    toast.warning("Next time no need to sign in on this page ", {
      autoClose: 5000,
    });
  };


//*********************        API         ******************************** */
const [formValues, setFormValues] = useState({});

const handleClick =  (data) => {
 
  console.log(formValues)
  try{
    fetch('http://localhost:8000/', {  

      method: 'POST',
      //mode: 'no-cors',
      body: JSON.stringify(data) ,
      
  })
  //.then((response)=>{ console.log(response);response.json() })
  .then((response) => {
    console.log(response);
  if (response.status === 200) {
   
   // setMessage("User created successfully");
    navigate("/");

    
  } else {
    setMessage("*Phone number is already used");
  }});
     
}
catch (err) {
  console.log(err);
}

}

const changeHandler = (e) => {
  
  console.log(e.target.value,e.target.name)
}

//********************************************************************************** */
  return (
   
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="main">
              <button className="arrow">
                <h2>
                  <BiArrowBack />
                </h2>
              </button>
              <h2 className="sub2">Sign Up</h2>
              <button className="menu">
                <img src="symbol.png" className="track" />
              </button>
            </div>
          </div>
          <div>
            <p>Let's create an account</p>
          </div>
          <div className="main-div">
            <br />
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
                 
                  onChange ={changeHandler}
                  value={formValues?.phonenumber}

                  name="phonenumber"
                  
                  maxLength={10}
                  autoComplete="off"
                  {...register("phonenumber")}
                  className={`input-field ${
                    errors.password ? "is-invalid" : "" }`}
                />
              </div>
             
            </div>
            <div className="warning">{message ? <p>{message}</p> : null}</div>
            {errors.phonenumber && (
              <small className="warning">
                {errors.phonenumber?.message}
              </small>
            )}
          </div>

          <div className="input-tp">
            <div>
              <label className="label-p">Password</label>
            </div>

            <div className="input-p">
              <div className="input-get">
                <input
                 
                  type={passwordType}
                  name="password"
                  value={formValues?.password}
                  onChange={changeHandler}
                  {...register("password")}
                  className={`input-set ${errors.password ? "is-invalid" : ""}`}
                
                  autoComplete="off"
                  
                />
              </div>

              <div className="eye">
                <button
                  className="eye-click"
                  onClick={EyeControl}
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
              <small className="warning">{errors.password?.message}</small>
            )}
            
          </div>

          <div className="input-tp">
            <div>
              <label className="label-p">Confirm Password</label>
            </div>

            <div className="input-p">
              <input
               
                type="password"
                name="conpassword"
                {...register("confirmPwd")}
                className={`input-set1  ${
                  errors.confirmPwd ? "is-invalid" : ""
                }`}
                
                
                autoComplete="off"
              />
            </div>
            {errors.confirmPwd && (
              <small className="warning">
                {errors.confirmPwd?.message}
              </small>
            )}
          </div>

          <br></br>
          <br></br>

          <div>
            <footer>
              <button className="button" type="submit" >
                SIGN UP
              </button>
              <ToastContainer autoClose={5000} />
              
              <p className="forgot">
                If you already have an account, just{" "}
                <button
                  className="resend"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  
                  Sign In
                </button>
              </p>

              <p className="copy">
                <sub>Copyright © GubairOne</sub>
              </p>
            </footer>
          </div>
        </form>
    
  );
};

export default SignUp;
