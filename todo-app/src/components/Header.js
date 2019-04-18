import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <>
      <img src="../assets/logo2.svg" alt="logo" />
      <h1>Happy {props.dayOfWeek}!</h1>
      <h2>What are you planning on achieving today?</h2>
    </>
  );
};

export default Header;
