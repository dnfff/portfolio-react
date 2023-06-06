import Footer from "../Footer";

import telegram from "../../img/telegram.png";
import mail from "../../img/mail.png"

import "../../assets/styles/main.css";

const Contacts = () => {
    return (
    <div>
        <div className="contacts">
                <h1>Contacts</h1>
                <div className="contacts_child">
                    <div className="contact_text">
                        <p><strong>Email</strong> <img className="mail" src={mail} alt="Link" /></p>
                        <p>alexeykomarov2001@icloud.com</p>
                        <div className="telegram">
                            <a href="https://t.me/dnnffff"><img src={telegram} alt="Link" /></a>
                            <p>@dnnffff</p>
                        </div>
                    </div>
                </div>
        </div>
        
        <Footer />
    </div>   
    );
}

export default Contacts