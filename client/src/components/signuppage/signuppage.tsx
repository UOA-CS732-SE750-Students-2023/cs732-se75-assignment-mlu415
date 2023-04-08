import styles from "./signuppage.module.scss";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store";

const Signuppage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

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

        <span className={styles.or}>or</span>
        <button className={styles.googleBTN}>
          <i className="fa-brands fa-google"></i> Sign up with google
        </button>
      </div>
    </div>
  );
};

export default Signuppage;
