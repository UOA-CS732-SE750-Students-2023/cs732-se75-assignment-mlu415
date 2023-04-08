import styles from "./loginpage.module.scss";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerv2}>
        <h1>Welcome Back</h1>

        <div className={styles.inputContainer}>
          <Typography>EMAIL</Typography>
          <TextField
            className={styles.textfield}
            placeholder="Enter your email"
            type="email"
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

        <button className={styles.loginBTN}>LOGIN</button>
        <span className={styles.or}>or</span>
        <button className={styles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign in with google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
