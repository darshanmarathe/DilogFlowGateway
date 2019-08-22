import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
const containerWrapper = {
  paddingTop: "80px"
};

const Layout = props => {
  return (
    <html>
      <Head>
        <title>Dilogflow gateway</title>
        <link
          rel="stylesheet"
          href="//bootswatch.com/4/materia/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container" style={containerWrapper}>
        {props.children}
      </div>
    </html>
  );
};

export default Layout;
