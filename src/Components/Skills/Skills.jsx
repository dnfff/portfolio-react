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

            <main className="section" id="sect">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong><em>About Me</em></strong><br/>
                </h1>
                <div className="head">
                    <div className="header__block">

                    <div className="header__block2">
                        <h1>Skills</h1>
                            <div className="firstline">
                                <div className="imagess">
                                    <img src={Html1} alt="" />
                                </div>

                                <div className="imagess">
                                    <img src={Css} alt="" />
                                </div>
                                <div className="imagess">
                                    <img src={Js} alt="" />
                                </div>
                            </div>

                            <div className="secondline">
                                <div className="imagess">
                                    <img src={Git} alt="" />
                                </div>
                                <div className="imagess">
                                    <img src={Node} alt="" />
                                </div>
                                <div className="imagess">
                                    <img src={React} alt="" />
                                </div>
                            </div>
                    </div> 
                        <NavLink to="/" className="btn">
                            <img src={left} className="down2"></img>
                        </NavLink>
                    </div>
                </div>
                </div>
                </main>
            <Footer />
        </div>
    );
}

export default Skills