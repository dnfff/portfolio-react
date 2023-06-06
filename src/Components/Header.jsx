import down from "../img/down.png"



const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Alexey</em></strong><br/> 
                </h1>
                <div className="header__text">
                    <p>welcome to the portfolio website</p>
                </div>
                {/* <a href="#sect" className="btn"><img src={down} className="down"></img></a> */}
            </div>
        </header>
    );
}

export default Header