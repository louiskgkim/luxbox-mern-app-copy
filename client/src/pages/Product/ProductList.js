import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FilterListIcon from '@mui/icons-material/FilterList';
import NativeSelect from '@mui/material/NativeSelect';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductCard from "../../components/Product/ProductCard";
import NotFound from '../../components/Product/NotFound';

const ProductList = (props) => {
    const products = props.products;
    const productsNum = products.length;

    return (
        <section className="main-content-wrapper">
            <div className="main-content-row">
                <h3>{props.category}</h3>
            </div>
            {products !== undefined
                ? <Fragment>
                    <div className="main-content-row">
                        <div className="product-filter-and-sort-wrapper">
                            <div className="product-filter">
                                <div className="product-filter-icon">
                                    <FilterListIcon /><span>Filter</span>
                                </div>
                                <span id="products-num"> {productsNum} Results </span>
                            </div>
                            <div className="product-sort">
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
                                >
                                    <option value="newest">Newest</option>
                                    <option value="price-high-to-low">Price High to Low</option>
                                    <option value="price-low-to-high">Price Low to High</option>
                                </NativeSelect>
                            </div>
                        </div>
                    </div>
                    <div className="main-content-row">
                        <div className="side-product-filter-container">
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
                            ? <div className="product-card-column-wrapper">
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
                            : <NotFound />
                        }
                    </div >
                </Fragment>
                : <Fragment>
                    <div className="main-content-row">
                        <p>Something went wrong. Try again.</p>
                    </div>
                </Fragment>
            }
        </section >
    );
};

export default ProductList;