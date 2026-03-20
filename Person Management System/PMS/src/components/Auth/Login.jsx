import React, { useState } from "react";

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setpassword("");
  };

  return (
    <div className="box1">
      <div className="box2">
        <form
          className="formbox"
          onSubmit={(e) => {
            submithandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text1"
            type="email"
            placeholder="Enter Your Email "
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="text2 mt-4px"
            type="password"
            placeholder="Enter Your Password"
            required
          />
          <button className="btnlog">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
