import React from "react";
import "../assets/Css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-top-bar container">
          <div>FreePdf</div>
          <div> <input type="text" name="search" id="search" /> <button>Search</button></div>
        </div>
        <div className="nav-title"><h2> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2> Sint adipisci quam dicta sunt quod labore pariatur, saepe omnis, inventore modi illo quibusdam. Nesciunt possimus, velit fugit officiis ut facere excepturi.</div>
      </nav>
    </>
  );
};

export default Navbar;
