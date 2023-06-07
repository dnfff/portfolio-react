import instagram from "../img/icons/instagram.svg"
import gitHub from "../img/icons/gitHub.svg"
import linkedIn from "../img/icons/linkedIn.svg"
import codewars from "../img/icons/codewars.svg"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://www.instagram.com/doneflory/?ysclid=liheucdd5485132824"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/dnfff"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%BA%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2-690975279/"><img src={linkedIn} alt="Link" /></a></li>
                        <li className="social__item2"><a href="https://www.codewars.com/users/dnff"><img src={codewars} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <h4>Links</h4>
                    </div>
                </div>
            </div>
        </footer>
    ); 
}

export default Footer 