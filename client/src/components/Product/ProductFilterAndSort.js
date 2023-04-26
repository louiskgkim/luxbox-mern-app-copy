import FilterListIcon from '@mui/icons-material/FilterList';
import NativeSelect from '@mui/material/NativeSelect';

const ProductFilterAndSort = (props) => {
    const resultNum = props.productsNum;

    return (
        <div className="product-filter-and-sort-wrapper">
            <div className="product-filter">
                <FilterListIcon />
                <span>Filter {resultNum} Results </span>
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
    )
};

export default ProductFilterAndSort;