import AlphabetList from '../utils/AlphabetList';
import { Link } from 'react-router-dom';

const Designers = (props) => {
    let designers = [];

    props.products.forEach((product) => {
        if (!designers.includes(product.designer)) {
            designers.push(product.designer)
        }
    })

    designers.sort();

    return (
        <section className="main-content-wrapper">
            <div className="main-content-row">
                <h3>{props.category}</h3>
            </div>
            <div className="main-content-row">
                <AlphabetList
                    className="designers-list"
                    data={designers}
                    style={{
                        width: "100%"
                    }}
                    generateFn={
                        (item, index) => {
                            return (
                                <div key={item}>
                                    {item}
                                </div>
                            )
                        }
                    }
                />
            </div>
        </section >
    );
};

export default Designers;