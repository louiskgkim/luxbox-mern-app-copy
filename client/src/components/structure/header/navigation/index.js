import { Link } from 'react-router-dom';

import MainMenu from './MainMenu';
import SearchBar from '../search/SearchBar';

import WishlistIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';

import Auth from '../../../../utils/auth';

const Navigation = (props) => {
    return (
        <nav className="header-nav">
            <div className="header-nav-row">
                <div className="collapsible-menu-container">
                    <div className="collapsible-menu">
                        <MainMenu />
                    </div>
                </div>
                <div className="logo-container">
                    <Link to="/" className="link">
                        <h1>LuxBox</h1>
                    </Link>
                </div>
                <div className="login-container">
                    <WishlistIcon />
                    <ShoppingBagIcon />
                </div>
            </div>
            <div className="header-nav-row">
                <div className="expandable-menu-container">
                    <MainMenu />
                </div>
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navigation;