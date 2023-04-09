import styles from "./signuppage.module.scss";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { auth, firestore, googleProvider } from "../../firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(firestore, "users", user.uid), { role: "user" });
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const userDoc = doc(firestore, "users", user.uid);

      if ((await getDoc(userDoc)).exists()) {
        navigate("/home");
      } else {
        await setDoc(userDoc, { role: "user" });
        navigate("/home");
      }
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

          <button type="submit" className={styles.loginBTN}>
            REGISTER
          </button>
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
