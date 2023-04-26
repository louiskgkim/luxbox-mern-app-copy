import React from 'react';
import { Link } from 'react-router-dom';
import ProductFilterAndSort from "../../components/Product/ProductFilterAndSort";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductCard from "../../components/Product/ProductCard";

const ProductList = (props) => {
    const products = props.products;
    const productsNum = products.length;

    return (
        <section className="main-content-wrapper">
            <div className="main-content-row">
                <h3>{props.category}</h3>
            </div>
            <div className="main-content-row">
                <ProductFilterAndSort productsNum={productsNum} />
            </div>
            <div className="main-content-row">
                <div className="side-product-filter-container">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>CATEGORY</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
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
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>DESIGNER</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>COLOR</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography>CLOTHING SIZE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                        >
                            <Typography>SHOE SIZE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div className="product-card-column-wrapper">
                    {products !== undefined && products.map((product, i) => {
                        try {
                            return (
                                <ProductCard
                                    key={i}
                                    image={product.image}
                                    brand={product.brand}
                                    name={product.name}
                                    price={product.price}
                                    color={product.color}
                                    size={product.size}
                                    description={product.description}
                                />
                            )
                        }
                        catch (err) {
                            return (
                                <ProductCard
                                    key={i}
                                    image={product.image}
                                    brand={product.brand}
                                    name={product.name}
                                    price={product.price}
                                    color={product.color}
                                    size={product.size}
                                    description={product.description}
                                />
                            )
                        }
                    })}
                </div>
            </div >
        </section >
    );
};

export default ProductList;