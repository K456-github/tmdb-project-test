import React, { useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { MdOutlineArrowBack } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import {AiFillEyeInvisible} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Signin = () => {

  // const [formdata, setformdata] = useState({
  //   password: "",
  // });
  // const password = formdata;

  // const [show, setshow] = useState(false);
  // const pass = useRef();

  // const change = (e) => {
  //   setformdata({ ...formdata, [e.target.name]: e.target.value });
  // };
  // const submit = (e) => {
  //   e.preventDefault();

  //   setformdata({
  //     password: "",
  //   });
  //   setshow(false);
  // };

  // const showpassword = () => {
  //   setshow(!show);
  //   pass.current.type = show ? "password" : "text";
  // };

  return (
    <div>
      <div className="h-screen flex justify-center items-center animate__animated animate__fadeIn ">
        <form className="rounded-xl mx-3 h-[600px] " >
          <h3>Create Your Account</h3>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />

          <label htmlFor="password">Password</label>
          <input type="text" placeholder="Password" id="password" />

          {/* <div className="eye">
            <input
              ref={pass}
              type="password"
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={change}
            ></input>

            {show ? (
              <p onClick={showpassword}>
                <AiFillEye/>
              </p>
            ) : (
              <p onClick={showpassword}>
                <AiFillEyeInvisible/>
              </p>
            )}
          </div> */}

          <label htmlFor="password">Comfirm Password</label>
          <input type="password" placeholder="Retype-Password" id="password" />

          <button className="hover:bg-[#3c3c3c] btn">
            <p className="text-black  hover:text-white">Create Account</p>
          </button>

          <div className="socialanimate flex items-center justify-around pt-4 pb-2 cursor-pointer">
           <a href="https://google.com">
           <div className="flex items-center  socialitem">
              <AiOutlineGoogle className="text-xl" />
              <h2 className="px-2 fontcolor ">Google</h2>
            </div>
           </a>
            <a href="https://facebook.com">
            <div className="flex items-center  socialitem">
              <FaFacebook className="" />
              <h2 className="px-2 fontcolor">Facebook</h2>
            </div>
                </a>
          </div>
          <Link to={"/login"}>
            <div className=" hover:scale-125 inline-block">
              <div className="text-2xl text-white">
                <MdOutlineArrowBack />
              </div>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
