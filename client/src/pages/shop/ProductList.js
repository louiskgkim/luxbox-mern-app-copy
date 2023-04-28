import React, { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ProductCard from '../../components/product/ProductCard';
import NotFound from '../../components/product/NotFound';

import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NativeSelect from '@mui/material/NativeSelect';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const ProductList = (props) => {
    const [sortState, setSortState] = useState();

    const { searchInput } = useParams();

    let products;
    if (props.category === "Search Results") {
        products = props.products.filter(product => Object.values(product).some(element => {
            if (element.toString().toLowerCase().includes(searchInput.toLowerCase())) {
                return true;
            }
            return false;
        }
        ))
    }
    else {
        products = props.products;
    }

    const productsNum = products.length;

    const handleSortChange = (e) => {
        // setSortState(e.target.value)
        // console.log(products);
        // products.sort((a, b) => {
        //     if (sortState === "newest") {
        //         return parseInt(b.createdAt) - parseInt(a.createdAt);
        //     }
        //     else if (sortState === "price-high-to-low") {
        //         return parseInt(b.price) - parseInt(a.price);
        //     }
        // })
    }

    return (
        <section className="main-content-container">
            <div className="main-content-row">
                <h3>{props.category}</h3>
            </div>
            <div className="main-content-row">
                {products
                    ? (
                        <Fragment>
                            <div className="product-filter-and-sort-wrapper">
                                <div className="product-filter-wrapper">
                                    <div className="collapsible-product-filter">
                                        <FilterListIcon /><span>Filter</span>
                                    </div>
                                    <span className="product-result-num"> {productsNum} Results </span>
                                </div>
                                <div className="product-sort-wrapper">
                                    <NativeSelect
                                        defaultValue="Sort By"
                                        inputProps={{
                                            id: 'uncontrolled-native',
                                        }}
                                        sx={{
                                            width: "fit-content",
                                            fontSize: "0.9rem",
                                            textAlign: "center",
                                            "& .MuiNativeSelect-select:after": {
                                                borderBottom: "1px solid white",
                                            },
                                        }}
                                        onChange={handleSortChange}
                                    >
                                        <option value="newest">Newest</option>
                                        <option value="price-high-to-low">Price High to Low</option>
                                        <option value="price-low-to-high">Price Low to High</option>
                                    </NativeSelect>
                                </div>
                            </div>
                            <div className="product-list-wrapper">
                                <div className="side-product-filter-wrapper">
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <p>CATEGORY</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul>
                                                <li>
                                                    <Link to="/shop/clothing" className="link">
                                                        Clothing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/shoes" className="link">
                                                        Shoes
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/bags" className="link">
                                                        Bags
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/jewelry-and-accessories" className="link">
                                                        Jewelry & Accessories
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/beauty" className="link">
                                                        Beauty
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/home" className="link">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop/sale" className="link">
                                                        Sale
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <p>DESIGNER</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <p>
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <p>COLOR</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <p>
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4a-content"
                                            id="panel4a-header"
                                        >
                                            <p>CLOTHING SIZE</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <p>
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel5a-content"
                                            id="panel5a-header"
                                        >
                                            <p>SHOE SIZE</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <p>
                                            </p>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                {products.length > 0
                                    ? (<div className="product-card-column-wrapper">
                                        {products.map((product, i) => {
                                            return (
                                                <ProductCard
                                                    key={i}
                                                    image={product.image}
                                                    designer={product.designer}
                                                    category={product.category}
                                                    subCategory={product.subCategory}
                                                    name={product.name}
                                                    price={product.price}
                                                    color={product.color}
                                                    description={product.description}
                                                    onSale={product.onSale}
                                                />
                                            )
                                        })}
                                    </div>
                                    )
                                    : <NotFound />
                                }
                            </div >
                        </Fragment>
                    )
                    : (
                        <Fragment>
                            <div className="main-content-row">
                                <p>Something went wrong. Try again.</p>
                            </div>
                        </Fragment>
                    )
                }
            </div>
        </section >
    );
};

export default ProductList;