import { Routes, Route } from 'react-router-dom';

import Home from '../../../pages/Home';
import { Profile, Login, Register, Wishlist, ShoppingBag } from '../../../pages/Account';
import { DesignerList, ProductList, ProductDetail } from '../../../pages/Shop';
import { ContactUs, Error } from '../../../pages/Support';

const Main = (props) => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<Profile />} />
                <Route path="/account/sign-in" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
                <Route path="/account/wishlist" element={<Wishlist />} />
                <Route path="/account/shopping-bag" element={<ShoppingBag />} />
                <Route path="/shop/new-in" element={<ProductList category="New In" />} />
                <Route path="/shop/designers" element={<DesignerList category="Designers"/>} />
                <Route path="/shop/designers/:designerParam" element={<ProductList />} />
                <Route path="/shop/sale" element={<ProductList category="Sale"/>} />
                <Route path="/shop/search/:searchInputParam" element={<ProductList />} />
                <Route path="/shop/product/:id" element={<ProductDetail />} />
                <Route path="/shop/:categoryParam" element={<ProductList />} />
                <Route path="/support/contact-us" element={<ContactUs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    );
};

export default Main;