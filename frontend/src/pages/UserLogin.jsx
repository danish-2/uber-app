import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex justify-between flex-col ">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Whats your Email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="enter email"
          />

          <h3 className=" text-lg font-medium mb-2">Whats your password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2   w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-700">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2   w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
