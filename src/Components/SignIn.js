import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/index";
import { Link } from "react-router-dom";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInSuccess, setSignInSuccess] = useState(false);

  useEffect(() => {
    // Set up an observer to listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If the user is logged in, set the signInSuccess state to true
      if (user) {
        setSignInSuccess(true);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Authsentication successful, you can redirect or perform other actions.
    } catch (error) {
      console.error("Error signing in:", error.message);
      setSignInSuccess(false); // Reset the success state if there's an error
    }
  };

  return (
    <div>
    <h1> Log in here </h1>
      <p>Email</p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <p>Password</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSignIn}>Sign In</button>

      {signInSuccess && <p>Successfully signed in!  <Link to="/">Go to Dashboard</Link> </p>}
    </div>
  );
}

export default SignIn;