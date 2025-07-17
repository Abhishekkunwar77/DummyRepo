'use client'
import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
const page = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <p>
          Your are signed in as {data.session.name}
          <button onClick={() => signOut()}>SignOut</button>
        </p>
      </>
    );
  }
  return (
    <div>
      <p>Please LogIn</p>
      <button onClick={() => signIn()}>SignIn</button>
    </div>
  );
};

export default page;
