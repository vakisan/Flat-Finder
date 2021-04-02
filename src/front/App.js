import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

import Navbar from "../components/Menu/MainNavbar";
import Login from "./Login";


function App() {
  return (
    <>
    <Navbar />
    <div>
      Landing page with login card
    <Login />
    </div>
    </>
  );
}

export default App;
