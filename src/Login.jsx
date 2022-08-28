import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIN = (event) => {
    // stops the refersh
    event.preventDefault();
    // auth
    //   .signinwithEmailAndPassword()
    //   .then((auth) => {
    //     // Sign-IN Successfully,then redirect to homepage
    //     navigate.push("/");
    //   })
    //   .catch((e) => {
    //     e.alert(auth.message);
    //   });
  };

  const CreateAccount = (event) => {
    // stops the refersh
    event.preventDefault();
    // auth
    //   .CreateAccountwithEmailAndPassword()
    //   .then((auth) => {
    //     // Create Account Successfully,then redirect to homepage
    //     navigate.push("/");
    //   })
    //   .catch((e) => {
    //     e.alert(auth.message);
    //   });
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <div className="login_main">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
              className="login_image"
            />
          </div>
        </Link>
        <div className="login_container">
          <h2>Sign-IN</h2>
          <form>
            <h4>E-mail</h4>
            <input
              type="e-mail"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button onClick={SignIN} type={"submit"} className="Sign-in-btn">
              Sign-in
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={CreateAccount} className="create_account">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
