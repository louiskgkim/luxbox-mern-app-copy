import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MainMenu = (props) => {
    const [bgColor, setBgColor] = useState("white");

    useEffect(() => {
        document.getElementById("app").style.backgroundColor = bgColor;
    }, [bgColor]);

    const openSideNav = () => {
        document.getElementById("main-menu").style.width = "250px";
        setBgColor("rgba(0,0,0,0.4)");
    };

    const closeSideNav = () => {
        document.getElementById("main-menu").style.width = "0";
        setBgColor("white");
    };

    return (
        <div className="main-menu-container">
            <ul className="main-menu" id="main-menu">
                <li>
                    <Link to={undefined} className="main-menu-close-btn link" onClick={closeSideNav}>&times;</Link>
                </li>
                <li>
                    <Link to="/shop/new-in" className="link">New In</Link>
                </li>
                <li>
                    <Link to="/shop/designers" className="link">Designers</Link>
                </li>
                <li>
                    <Link to="/shop/clothing" className="link">Clothing</Link>
                </li>
                <li>
                    <Link to="/shop/shoes" className="link">Shoes</Link>
                </li>
                <li>
                    <Link to="/shop/bags" className="link">Bags</Link>
                </li>
                <li>
                    <Link to="/shop/jewelry-and-accessories" className="link">Jewelry & Accessories</Link>
                </li>
                <li>
                    <Link to="/shop/beauty" className="link">Beauty</Link>
                </li>
                <li>
                    <Link to="/shop/home" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/shop/sale" className="link">Sale</Link>
                </li>
            </ul>
            <MenuIcon id="menu-icon" onClick={openSideNav} />
        </div>
    );
};

export default MainMenu;