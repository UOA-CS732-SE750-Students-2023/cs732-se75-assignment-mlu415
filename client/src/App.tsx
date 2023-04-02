import { Link } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/loginpage/loginpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
