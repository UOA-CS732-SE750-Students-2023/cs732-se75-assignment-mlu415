import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginpage.module.scss";
import { auth, googleProvider } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerv2}>
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.loginBTN}>
            LOGIN
          </button>
        </form>

        <span className={styles.or}>or</span>

        <button onClick={handleGoogleSignin} className={styles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
