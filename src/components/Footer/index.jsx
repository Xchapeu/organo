import "./styles.css";
import fbLogo from "../../assets/fb.png";
import twLogo from "../../assets/tw.png";
import igLogo from "../../assets/ig.png";
import logo from "../../assets/logo.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="socialMedia">
                <img src={fbLogo} alt="Logo facebook"/>
                <img src={twLogo} alt="Logo twitter"/>
                <img src={igLogo} alt="Logo instagram"/>
            </div>
            <img className="logo" src={logo} alt="Logo organo"/>
            <span>Desenvolvido por Anderson Rodrigo</span>
        </footer>
    );
}