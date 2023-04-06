import styles from "./loginpage.module.scss";
import { Link } from "react-router-dom";
import loginpic from "../../assets/login.jpg";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../redux/actions/auth";
import { AppDispatch } from "../../redux/store";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    dispatch(signin({ email, password }, navigate));
  };

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

        <button className={styles.loginBTN} onClick={handleLoginClick}>
          LOGIN
        </button>
        <span className={styles.or}>or</span>
        <button className={styles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign in with google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
