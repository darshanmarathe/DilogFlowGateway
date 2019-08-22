import React from 'react'
import  Head from "next/head";
import Navbar from './navbar';

const Layout = (props) => {
    return (
        <html>
                <Head>
                    <title>Dilogflow gateway</title>           
                     <link rel="stylesheet" href="//bootswatch.com/4/cyborg/bootstrap.min.css"/>
                </Head>
                <Navbar />
             <div className="container">

             {props.children}
                 </div>    

        </html>
    )
}

export default Layout
