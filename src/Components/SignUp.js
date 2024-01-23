import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      // Create a new user account with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Registration successful, you can redirect or perform other actions.
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div>
      <h1>
        Register
      </h1>
      <p>Email</p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <p>Password</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;