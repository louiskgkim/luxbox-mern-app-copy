import AlphabetList from '../../utils/AlphabetList';

const DesignerList = (props) => {
    let designers = [];

    props.products.forEach((product) => {
        if (!designers.includes(product.designer)) {
            designers.push(product.designer)
        }
    })

    designers.sort();

    return (
        <section className="main-content-container">
            <div className="main-content-row">
                <h3>{props.category}</h3>
            </div>
            <div className="main-content-row">
                <div className="designer-list-content-wrapper">
                    <AlphabetList
                        className="designer-list"
                        data={designers}
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
            </div>
        </section >
    );
};

export default DesignerList;