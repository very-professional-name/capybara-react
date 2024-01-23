import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Authsentication successful, you can redirect or perform other actions.
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div>
        <p>
            E-mail
        </p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>
            Password
        </p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;