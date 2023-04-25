import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

const Main = (props) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop/new-in" />
                <Route path="/shop/designers" />
            </Routes>
        </main>
    );
};

export default Main;