import Footer from "../Footer";

import telegram from "../../img/telegram.png";
import mail from "../../img/mail.png"

import "../../assets/styles/main.css";

const Contacts = () => {
    return (
    <div>
        
            <header className="header2">
                <div className="header__wrapper2">
                    <h1 className="header__title">
                        <strong><em>Contacts</em></strong><br/> 
                    </h1>

                    <div className="contacts_child">
                    <div className="contact_text">
                        <p><strong>Email</strong> </p>
                        <img className="mail" src={mail} alt="Link" />
                        <p>alexeykomarov2001@icloud.com</p>
                        <div className="telegram">
                            <a href="https://t.me/dnnffff"><img src={telegram} alt="Link" /></a>
                            <p>@dnnffff</p>
                        </div>
                    </div>
                </div> 

                    {/* <a href="#sect" className="btn"><img src={down} className="down"></img></a> */}
                </div>
            </header>
        {/* </div> */}
        
        <Footer />
    </div>   
    );
}

export default Contacts