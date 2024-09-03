import React, { useEffect, useRef, useState } from "react";
import WrapperContainer from "../../Components/common/WrapperContaner";
import { FaLock, FaRegUser } from "react-icons/fa6";
import { LuEye, LuEyeOff, LuMail, LuUtensilsCrossed } from "react-icons/lu";
import Button from "../../Components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const Signup = () => {
  const navigate = useNavigate();
  const isLoggedin = localStorage.getItem("isLoggedin");

  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin, navigate]);
  const usenameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checkItem, setCheckItem] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [ErrorMessage, setErrorMessage] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  useEffect(() => {
    if (email) {
      validateEmail(email);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, repeatPassword);

    let ve = emailRegex.test(email);
    if (ve !== validEmail) {
      return setErrorMessage("Please enter a valid email");
    }
    if (!username) {
      if (usenameRef.current) {
        usenameRef.current.focus();
      }
      return setErrorMessage("Please enter username");
    }
    if (!email) {
      if (emailRef.current) {
        emailRef.current.focus();
      }
      return setErrorMessage("Please enter email");
    }
    if (!password) {
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      return setErrorMessage("Please enter password");
    }
    if (password.length < 8) {
      return setErrorMessage("Password must be at least 8 characters");
    }

    if (!repeatPassword) {
      if (repeatPasswordRef.current) {
        repeatPasswordRef.current.focus();
      }
      return setErrorMessage("Please enter repeat password");
    }

    if (password !== repeatPassword) {
      return setErrorMessage("Password does not match");
    }

    if (!checkItem) {
      return setErrorMessage("Please agree to the terms and policy");
    }
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    setErrorMessage("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setCheckItem(false);
    setValidEmail(false);

    // push to login page
    window.location.href = "/";
  };

  return (
    <WrapperContainer>
      <div className="flex gap-8 p-4 lg:p-8 shadow-sm shadow-gray-300 ">
        <div className=" hidden sm:flex flex-[1]  overflow-hidden  h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            alt=""
            className=" w-full object-cover  h-full "
          />
        </div>
        <div className="flex-1 ">
          {/* Signup form */}
          <form onSubmit={handleSubmit}>
            {/* heading */}
            <h1 className="pb-8 text-xl md:text-3xl lg:text-4xl font-bold ">
              Want to join our Faimly
            </h1>
            {ErrorMessage && (
              <h2 className="p-3 border  mb-3 rounded-md font-bold border-red-300">
                <p className="text-red-600">{ErrorMessage}</p>
              </h2>
            )}
            <div className="border border-neutral-100 rounded-md">
              {/* user name field */}
              <div className="flex items-center   relative  rounded border border-neutral-200 ">
                <FaRegUser
                  size={20}
                  className=" absolute left-4 top-3.5  text-neutral-500"
                />
                <input
                  ref={usenameRef}
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                  placeholder="Username"
                  className=" focus:outline-none focus:border-b-4 focus:border-red-600 rounded w-full px-12 py-3 bg-neutral-100 "
                />
              </div>

              {/* Email field */}
              <div className="flex items-center   relative  rounded border border-neutral-200">
                <LuMail
                  size={20}
                  className=" absolute left-4 top-3.5  text-neutral-500"
                />
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  placeholder="Email"
                  className=" focus:outline-none focus:border-b-4 focus:border-red-600 rounded w-full px-12 py-3 bg-neutral-100"
                />
                {email && (
                  <div className="">
                    {validEmail ? (
                      <FaCheckCircle
                        size={16}
                        className="absolute right-4 top-3 cursor-pointer text-red-500 "
                      />
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="flex items-center   relative  rounded border border-neutral-200">
                <FaLock
                  size={16}
                  className=" absolute left-4 top-3.5  text-neutral-500"
                />
                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  placeholder="Password"
                  className=" focus:outline-none focus:border-b-4 focus:border-red-600 rounded w-full px-12 py-3 bg-neutral-100"
                />
                {password && (
                  <div className="absolute right-4 top-3 cursor-pointer">
                    {showPassword ? (
                      <LuEyeOff
                        size={20}
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <LuEye size={20} onClick={() => setShowPassword(true)} />
                    )}
                  </div>
                )}
              </div>

              {/* Repeat password */}
              <div className="flex items-center   relative  rounded border border-neutral-200">
                <FaLock
                  size={16}
                  className=" absolute left-4 top-3.5  text-neutral-500"
                />
                <input
                  ref={repeatPasswordRef}
                  type={showRepeatPassword ? "text" : "password"}
                  name="repeat-password"
                  id="repeat-password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  autoComplete="off"
                  placeholder="Repeat Password"
                  className=" focus:outline-none focus:border-b-4 focus:border-red-600 rounded w-full px-12 py-3 bg-neutral-100"
                />
                {repeatPassword && (
                  <div className="absolute right-4 top-3 cursor-pointer">
                    {showRepeatPassword ? (
                      <LuEyeOff
                        size={20}
                        onClick={() => setShowRepeatPassword(false)}
                      />
                    ) : (
                      <LuEye
                        size={20}
                        onClick={() => setShowRepeatPassword(true)}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/*Check box  */}
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={checkItem}
                onChange={() => setCheckItem(!checkItem)}
                className="w-4 h-4 accent-red-500"
              />
              <label htmlFor="terms" className="text-sm text-neutral-600">
                I agree to the terms and policy.
              </label>
            </div>

            {/* Signup Button */}
            <Button className={"mt-5 w-32 md:py-3  font-bold"}>
              <input type="submit" value={"Sign up"} />
            </Button>
          </form>

          {/* Login link */}
          <p className="mt-4 text-neutral-600">or you can join with </p>

          <div className="flex flex-col md:flex-row justify-between gap-4 my-2">
            <button className="flex items-center gap-4 w-full border  rounded-lg py-3  px-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png"
                alt="gmail"
                className="w-6"
              />
              <span className="w-full text-center font-semibold text-neutral-700">
                Sign In with Google
              </span>
            </button>
            <button className="flex  items-center gap-4 w-full border  rounded-lg py-3  px-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/640px-2023_Facebook_icon.svg.png"
                alt="gmail"
                className="w-6"
              />
              <span className="w-full text-center font-semibold text-neutral-700">
                Sign In with Google
              </span>
            </button>
          </div>

          {/* Login link */}
          <div>
            <p className="text-neutral-600">
              Already have an account ?{" "}
              <Link to={"/login"} className="text-red-600">
                Login
              </Link>
            </p>
            <div className="flex items-center gap-1 float-right mt-8 ">
              <LuUtensilsCrossed className="pb-0.5 w-6 h-6 md:w-7 md:h-7" />
              <Link
                to="/"
                className=" text-xl sm:text-2xl md:text-3xl font-bold "
              >
                <span className="text-black">Perfect</span>
                <span className="text-red-500">Recipe</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Signup;
