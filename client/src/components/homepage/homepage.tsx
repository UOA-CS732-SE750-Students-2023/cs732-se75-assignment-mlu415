import styles from "./homepage.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import loginpic from "../../assets/login.jpg";
import { Avatar, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    setUser(undefined);
    navigate("/");
  };

  if (user === undefined) {
    return <p>Loading...</p>;
  }

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.avatarContainer}>
        {user.photoURL ? (
          <Avatar alt={user.displayName} src={user.photoURL} />
        ) : (
          <Avatar>{user.email[0]}</Avatar>
        )}
        <Typography variant="h6" className={styles.username}>
          Welcome {user.displayName || user.email}
        </Typography>
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className={styles.contentContainer}>
        <h1>Protected Home Page</h1>
        <p>You can only see this page if you are authenticated.</p>
      </div>
    </div>
  );
};

export default HomePage;
