import { Link } from 'react-router-dom';

import MainMenu from './MainMenu';
import SearchBar from '../search/SearchBar';

import ProfileIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import WishlistIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';

import Auth from '../../../../utils/auth';

const Navigation = (props) => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
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
                <div className="account-container">
                    {Auth.loggedIn()
                        ? (
                            <div className="login-status">
                                <Link to="/account/sign-in" className="link">
                                    <div className="header-nav-menu-with-icon">
                                        <ProfileIcon fontSize="small" className="header-nav-icon" id="profile-icon" />
                                        <span>Sign In</span>
                                    </div>
                                </Link>
                            </div>
                        )
                        : (
                            <div className="login-status">
                                <Link to="/account" className="link">
                                    <div className="header-nav-menu-with-icon">
                                        <ProfileIcon fontSize="small" className="header-nav-icon" id="profile-icon" />
                                        <span>My Account</span>
                                    </div>
                                </Link>
                                <div className="header-nav-menu-with-icon" onClick={logout}>
                                    <LogoutIcon fontSize="small" className="header-nav-icon" id="logout-icon" />
                                    <span>Sign Out</span>
                                </div>
                            </div>
                        )
                    }
                    <Link to="/shop/wishlist" className="link">
                        <div className="header-nav-menu-with-icon">
                            <WishlistIcon fontSize="small" className="header-nav-icon" id="wishlist-icon" />
                            <span>Wishlist</span>
                        </div>
                    </Link>
                    <Link to="/shop/shopping-bag" className="link">
                        <div className="header-nav-menu-with-icon">
                            <ShoppingBagIcon fontSize="small" className="header-nav-icon" id="shopping-bag-icon" />
                            <span>Shopping Bag</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="header-nav-row">
                <div className="expandable-menu-container">
                    <MainMenu />
                </div>
                <SearchBar />
            </div>
        </nav >
    );
};

export default Navigation;