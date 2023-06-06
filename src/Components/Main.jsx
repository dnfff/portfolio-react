import "../assets/styles/reset.css"

import right from "../img/right.png"

import Footer from "./Footer"
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
    <div>
        <main className="section2" id="sect">
            <header className="header2">
                <div className="header__wrapper2">
                    <h1 className="header__title">
                        <strong><em>About Me</em></strong><br/> 
                    </h1>
                    <div className="header__text">
                        <p>Aducation</p>
                    </div>

                    <div className="header__block__u">
                        <h2>
                            <strong>"St. Petersburg State University of Civil Aviation"</strong>
                        </h2>
                        <p>Mathematical and software management systems</p>
                        <p>Bachelor</p>
                        <p>2018 - 2022</p>
                    </div>

                    <div className="header__block__u">
                        <h2><strong>Udemy Course</strong></h2>
                        <p>Creation of modern adaptive websites - HTML5, CSS3</p>
                        <p>11/2022 - 01/2023</p>
                    </div>

                    <div className="header__block__u">
                        <h2><strong>Udemy Course</strong></h2>
                        <p>Full course on JavaScript + React - from scratch to the result</p>
                        <p>03/2023 - Present</p>
                    </div>
                    <NavLink to="/skills" className="btn">
                        <img src={right} className="down2"></img>
                    </NavLink>

                    {/* <a href="#sect" className="btn"><img src={down} className="down"></img></a> */}
                </div>
            </header>

            <Footer />
        </main>

    </div>
    );
}

export default Main