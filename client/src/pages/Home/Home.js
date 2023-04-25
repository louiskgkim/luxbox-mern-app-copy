import { Link } from 'react-router-dom';
import justLandedImg from '../../assets/img/index-just-landed.jpg';
import clothingImg from '../../assets/img/shop-category-clothing.jpg';
import shoesImg from '../../assets/img/shop-category-shoes.jpg';
import bagsImg from '../../assets/img/shop-category-bags.jpg';
import jewelryAndAccessoriesImg from '../../assets/img/shop-category-jewelry-and-accessories.jpg';
import beautyImg from '../../assets/img/shop-category-beauty.jpg';
import homeImg from '../../assets/img/shop-category-home.jpg';

const Home = (props) => {
    return (
        <section className="home-wrapper">
            <div className="home-content-row">
                <div className="just-landed">
                    <img src={justLandedImg} alt="just landed"></img>
                    <div className="just-landed-text">
                        <h1>Just Landed</h1>
                        <p>The summer 2023 collection</p>
                        <Link to="/shop/new-in" className="link">
                            <button id="just-landed-shop-now-button">
                                Shop now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-content-row">
                <div className="shop-category-container">
                    <Link to="/shop/clothing" className="link">
                        <div className="shop-category">
                            <img src={clothingImg} alt="shop clothing"></img>
                            <h4>Clothing</h4>
                        </div>
                    </Link>
                    <Link to="/shop/shoes" className="link">
                        <div className="shop-category">
                            <img src={shoesImg} alt="shop shoes"></img>
                            <h4>Shoes</h4>
                        </div>
                    </Link>
                    <Link to="/shop/bags" className="link">
                        <div className="shop-category">
                            <img src={bagsImg} alt="shop bags"></img>
                            <h4>Bags</h4>
                        </div>
                    </Link>
                    <Link to="/shop/jewelry-and-accessories" className="link">
                        <div className="shop-category">
                            <img src={jewelryAndAccessoriesImg} alt="shop jewelry and accessories"></img>
                            <h4>Jewelry & Accessories</h4>
                        </div>
                    </Link>
                    <Link to="/shop/beauty" className="link">
                        <div className="shop-category">
                            <img src={beautyImg} alt="shop beauty"></img>
                            <h4>Beauty</h4>
                        </div>
                    </Link>
                    <Link to="/shop/home" className="link">
                        <div className="shop-category">
                            <img src={homeImg} alt="shop home"></img>
                            <h4>Home</h4>
                        </div>
                    </Link>
                </div >
            </div >
        </section >
    );
};

export default Home;