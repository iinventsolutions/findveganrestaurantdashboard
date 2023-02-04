import React, { useState } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Signup</button>
      {isLogin ? (
        <div>
          <Login />
        </div>
      ) : (
        <div>
          <SignUp />
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
