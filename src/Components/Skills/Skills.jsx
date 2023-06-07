import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import "../../assets/styles/reset.css"

import Html1 from "../../img/html.png"
import Css from "../../img/css.png"
import Js from "../../img/js.png"
import Git from "../../img/git.png"
import Node from "../../img/nodejs.png"
import React from "../../img/react.png"

import { NavLink } from 'react-router-dom'

import left from "../../img/left.png"



const Skills = () => {
    return (
        <div>
            <Header />

            <main className="section2" id="sect">
            <header className="header3">
            <div className="header__wrapper3">
                <h1 className="header__title">
                    <strong><em>About Me</em></strong><br/> 
                </h1>
                <div className="header__text">
                    <p>Skills</p>
                </div>
    <div className="allcol">
        <div className="col1">
                <div className="header__block__u2">
                    <img src={Html1} alt="" />
                </div>
                
                <div className="header__block__u2">
                    <img src={Css} alt="" />
                </div>
                
                <div className="header__block__u2">
                    <img src={Js} alt="" />
                </div>
        </div> 
        <div className="col2">
                <div className="header__block__u2">
                    <img src={Git} alt="" />
                </div>
                
                <div className="header__block__u2">
                    <img src={Node} alt="" />
                </div>
                
                <div className="header__block__u2">
                    <img src={React} alt="" />
                </div>
        </div> 
    </div>
                <NavLink to="/" className="btn">
                    <img src={left} className="down2"></img>
                </NavLink>
                {/* <a href="#sect" className="btn"><img src={left} className="down"></img></a> */}
            </div>
            </header>

            <Footer />
            </main>
            </div>
    );
}

export default Skills