import React from "react";

const Navbar = ()  => {
  return (
    <div>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/#">Nowhere</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar