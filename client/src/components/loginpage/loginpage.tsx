import styles from "./loginpage.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import loginpic from "../../assets/login.jpg";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerv2}>
        <h1>Welcome Back</h1>

        <div className={styles.inputContainer}>
          <Typography>EMAIL</Typography>
          <TextField
            className={styles.textfield}
            placeholder="Enter your email"
            type="Email"
          />
        </div>

        <div className={styles.inputContainer}>
          <label>PASSWORD</label>
          <TextField
            className={styles.textfield}
            placeholder="Enter your password"
            type="Password"
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
