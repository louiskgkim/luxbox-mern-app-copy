import { Routes, Route } from 'react-router-dom';

import Home from '../../../pages/home';
import Account from '../../../pages/account';
import Login from '../../../pages/account/Login';
import Register from '../../../pages/account/Register';
import Wishlist from '../../../pages/account/Wishlist';
import ShoppingBag from '../../../pages/account/ShoppingBag';
import { DesignerList, ProductList, ProductDetail } from '../../../pages/shop';
import { ContactUs, Error } from '../../../pages/support';
import AccountDetail from '../../Account/AccountDetail';
import OrderHistory from '../../Account/OrderHistory';

const Main = (props) => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account/sign-in" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
                <Route path="/account/wishlist" element={<Wishlist />} />
                <Route path="/account/shopping-bag" element={<ShoppingBag />} />
                <Route path="/account/:accountParam" element={<Account />} />
                <Route path="/shop/new-in" element={<ProductList category="New In" />} />
                <Route path="/shop/designers" element={<DesignerList category="Designers"/>} />
                <Route path="/shop/designers/:designerParam" element={<ProductList />} />
                <Route path="/shop/sale" element={<ProductList category="Sale"/>} />
                <Route path="/shop/search/:searchInputParam" element={<ProductList />} />
                <Route path="/shop/product/:productNameParam" element={<ProductDetail />} />
                <Route path="/shop/:categoryParam" element={<ProductList />} />
                <Route path="/support/contact-us" element={<ContactUs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    );
};

export default Main;