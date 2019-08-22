import React  from "react";
import Link from "next/link"

const Navbar = ()  => {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div className="container">
      <Link href="/" ><a className="navbar-brand">DilogFlow Gateway</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
       
          <li className="nav-item">
            <Link  href="/About"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact"><a  className="nav-link">Contact</a></Link>
          </li>
          <li className="nav-item">
            <Link  href="/Contact"><a className="nav-link">Login</a></Link>
          </li>
          
        </ul>

      </div>
    </div>
  </div>
  );  
}

export default Navbar