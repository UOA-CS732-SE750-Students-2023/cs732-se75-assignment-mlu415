import styles from "./signuppage.module.scss";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

const Signuppage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerv2}>
        <h1>Create Your Account</h1>

        <div className={styles.inputContainer}>
          <Typography>EMAIL</Typography>
          <TextField
            className={styles.textfield}
            placeholder="Enter your email"
            type="email"
          />
        </div>

        <div className={styles.inputContainer}>
          <Typography>PASSWORD</Typography>
          <TextField
            className={styles.textfield}
            placeholder="Enter your password"
            type="password"
          />
        </div>

        <div className={styles.inputContainer}>
          <Typography>CONFIRM PASSWORD</Typography>
          <TextField
            className={styles.textfield}
            placeholder="Retype your password"
            type="password"
          />
        </div>

        <button className={styles.loginBTN}>REGISTER</button>
        <span className={styles.or}>or</span>
        <button className={styles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign up with google
        </button>
      </div>
    </div>
  );
};

export default Signuppage;
