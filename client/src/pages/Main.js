import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ProductList from './Product/ProductList';
import allProducts from '../utils/allProductsData.json';
import Designers from './Designers';

const Main = (props) => {
    const clothingProducts = allProducts.filter(product => product.category === "clothing");
    const shoesProducts = allProducts.filter(product => product.category === "shoes");
    const bagsProducts = allProducts.filter(product => product.category === "bags");
    const jewelryAndAccessoriesProducts = allProducts.filter(product => product.category === "jewelry-and-accessories");
    const beautyProducts = allProducts.filter(product => product.category === "beauty");
    const homeProducts = allProducts.filter(product => product.category === "home");
    const saleProducts = allProducts.filter(product => product.onSale === "true");

    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/shop/new-in"
                    element={
                        <ProductList
                            category="New In"
                            products={allProducts}
                        />
                    }
                />
                <Route
                    path="/shop/designers"
                    element={
                        <Designers
                            category="Designers"
                            products={allProducts}
                        />
                    }
                />
                <Route
                    path="/shop/clothing"
                    element={
                        <ProductList
                            category="Clothing"
                            products={clothingProducts}
                        />
                    }
                />
                <Route
                    path="/shop/shoes"
                    element={
                        <ProductList
                            category="Shoes"
                            products={shoesProducts}
                        />
                    }
                />
                <Route
                    path="/shop/bags"
                    element={
                        <ProductList
                            category="Bags"
                            products={bagsProducts}
                        />
                    }
                />
                <Route
                    path="/shop/jewelry-and-accessories"
                    element={
                        <ProductList
                            category="Jewelry & Accessories"
                            products={jewelryAndAccessoriesProducts}
                        />
                    }
                />
                <Route
                    path="/shop/beauty"
                    element={
                        <ProductList
                            category="Beauty"
                            products={beautyProducts}
                        />
                    }
                />
                <Route
                    path="/shop/home"
                    element={
                        <ProductList
                            category="Home"
                            products={homeProducts}
                        />
                    }
                />
                <Route
                    path="/shop/sale"
                    element={
                        <ProductList
                            category="Sale"
                            products={saleProducts}
                        />
                    }
                />
            </Routes>
        </main>
    );
};

export default Main;