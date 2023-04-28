import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../../utils/queries';

import Home from '../../../pages/home';
import { Profile, Login, Register, Wishlist, ShoppingBag } from '../../../pages/account';
import { DesignerList, ProductList, ProductDetail } from '../../../pages/shop';
import { ContactUs, Error } from '../../../pages/support';

const Main = (props) => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const allProducts = data?.products || [];

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
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Profile />} />
                <Route path="/account/sign-in" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
                <Route path="/account/wishlist" element={<Wishlist />} />
                <Route path="/account/shopping-bag" element={<ShoppingBag />} />
                <Route path="/shop/new-in" element={<ProductList category="New In" products={allProducts} />} />
                <Route path="/shop/designers" element={<DesignerList category="Designers" products={allProducts} />} />
                <Route path="/shop/clothing" element={<ProductList category="Clothing" products={clothingProducts} />} />
                <Route path="/shop/shoes" element={<ProductList category="Shoes" products={shoesProducts} />} />
                <Route path="/shop/bags" element={<ProductList category="Bags" products={bagsProducts} />} />
                <Route path="/shop/jewelry-and-accessories" element={<ProductList category="Jewelry & Accessories" products={jewelryAndAccessoriesProducts} />} />
                <Route path="/shop/beauty" element={<ProductList category="Beauty" products={beautyProducts} />} />
                <Route path="/shop/home" element={<ProductList category="Home" products={homeProducts} />} />
                <Route path="/shop/sale" element={<ProductList category="Sale" products={saleProducts} />} />
                <Route path="/shop/search/:searchInput" element={<ProductList category="Search Results" products={allProducts} />} />
                <Route path="/shop/product/:id" element={<ProductDetail />} />
                <Route path="/support/contact-us" element={<ContactUs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    );
};

export default Main;