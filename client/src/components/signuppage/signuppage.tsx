import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signuppage.module.scss";
import { auth } from "../../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Signuppage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== passwordVerify) {
      alert("Passwords do not match");
      return;
    }
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerv2}>
        <h1>Create Your Account</h1>
        <form onSubmit={handleSignup}>
          <div className={styles.inputContainer}>
            <Typography>EMAIL</Typography>
            <TextField
              className={styles.textfield}
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            <Typography>PASSWORD</Typography>
            <TextField
              className={styles.textfield}
              placeholder="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.inputContainer}>
            <Typography>CONFIRM PASSWORD</Typography>
            <TextField
              className={styles.textfield}
              placeholder="Confirm Password"
              variant="outlined"
              type="password"
              value={passwordVerify}
              onChange={(e) => setPasswordVerify(e.target.value)}
            />
          </div>

          <button className={styles.loginBTN}>REGISTER</button>
        </form>

        <span className={styles.or}>or</span>

        <button onClick={handleGoogleSignup} className={styles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signuppage;
