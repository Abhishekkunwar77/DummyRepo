"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../component/Navbar";

const LoginPage = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <Navbar />
        <div className="signin-container">
          <p className="signedin">
            You are signed in as: <br /> Name: {session.user.name} <br /> Email:{" "}
            {session.user.email}{" "}
          </p>
          <button className="signinbutton" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="please-login">
        <p className="login-para">Please Log In</p>
        <button className="signin-wala-button" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </>
  );
};

export default LoginPage;
