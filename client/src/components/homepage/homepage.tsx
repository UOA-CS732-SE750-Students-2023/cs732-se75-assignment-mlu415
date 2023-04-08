import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../firebase/firebase";
import { Avatar, Button, Typography } from "@mui/material";
import styles from "./HomePage.module.scss";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser({
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
        });

        const userDoc = await getDoc(doc(firestore, "users", authUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserRole(userData?.role);
        } else {
          // Create a new user document with a default role
          await setDoc(doc(firestore, "users", authUser.uid), { role: "user" });
          setUserRole("user");

          // Set the user role state to the default role
          setUserRole("user");
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    setUser(undefined);
    setUserRole("");
    navigate("/login");
  };
  if (user === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.homeContainer}>
      <div className={styles.avatarContainer}>
        {user?.photoURL ? (
          <Avatar alt={user.displayName || "User"} src={user.photoURL} />
        ) : (
          <Avatar>{(user?.email || "U")[0]}</Avatar>
        )}
        <Typography variant="h6" className={styles.username}>
          Welcome {user?.displayName || user?.email}
        </Typography>
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className={styles.contentContainer}>
        <h1>Protected Home Page</h1>
        <p>You can only see this page if you are authenticated.</p>
        {userRole === "admin" && (
          <div>
            <h2>Admin Features</h2>
            <p>You have access to special admin features.</p>
            <Button>Admin only Button</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
