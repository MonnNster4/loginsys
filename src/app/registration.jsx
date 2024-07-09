"use client";

import React, { useState } from "react";



import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const Registration = ({ props }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      setMessage("User already exists!");
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("Registration successful!");
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <Input
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
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
        <Button type="submit">Register</Button>
      </form>

      <div className="flex justify-center items-center gap-1">
        <p className="text-gray-400 text-xs">Already have an account?</p>
        <span
          className="text-black text-xs hover:underline hover:cursor-pointer"
          onClick={() => props()}
        >
          Log in
        </span>
      </div>

      <div className="flex justify-center items-center ">
        {message && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </>
  );
};

export default Registration;
