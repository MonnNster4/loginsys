"use client";

import React, { useState } from "react";



import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import Registration from "./registration";

import { Input } from "@/components/ui/input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [buttonChange, setButtonChange] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  const handleButtonChange = () => {
    setButtonChange(!buttonChange);
  };

  const passHandleChange = () => {
    setButtonChange(false);
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center p-4 h-[100vh] ">
        <div className="lg:m-auto w-full  max-w-[500px] lg:max-w-[1000px] ">
          <div className="  lg:flex lg:flex-row ">
            <div className="lg:h-full lg:max-h-[900px] lg:w-[1300px]">
              <img
                src={"./static/img/citylights2.jpg"}
                alt=""
                className="h-56 w-full  lg:h-[31.2rem]"
              ></img>
            </div>
            <div className="border p-8 h-[500px] lg:w-[650px] ">
              <div className="flex flex-col items-center gap-8">
                <img
                  src={"./static/img/groupnblogo.png"}
                  alt=""
                  className="h-24 w-24 "
                ></img>

                <div className="space-y-8 w-full flex flex-col gap-4 ">
                  {buttonChange == true ? (
                    <Registration props={passHandleChange} />
                  ) : (
                    <>
                      <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-5"
                      >
                        <Input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                        <Input
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Button type="submit">Login</Button>
                      </form>

                      <div className="flex justify-between">
                        <div className="flex gap-2 justify-center items-center ">
                          <Checkbox className="-mt-[43px]  " />
                          <p className="text-sm -mt-[43px]">Remember me</p>
                        </div>
                        <div>
                          <p className="text-red-500 text-xs -mt-[30px] ">
                            Forgot Password?
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center items-center gap-1">
                        <p className="text-gray-400 text-xs">
                          Don't have an account?
                        </p>
                        <span
                          className="text-black text-xs hover:underline hover:cursor-pointer "
                          onClick={handleButtonChange}
                        >
                          Sign Up
                        </span>
                      </div>
                      <div className="flex justify-center items-center mt-0 ">
                        {message && (
                          <p className="text-red-500 text-xs">{message}</p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
