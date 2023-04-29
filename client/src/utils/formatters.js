export const formatCurrency = (num) => {
    return '$' + num.toLocaleString("en-US");
};

export const formatCategoryName = (category) => {
    switch (category) {
        case "bags":
            return "Bags";
        case "beauty":
            return "Beauty";
        case "clothing":
            return "Clothing";
        case "home":
            return "Home";
        case "jewelry-and-accessories":
            return "Jewelry & Accessories";
        case "shoes":
            return "Shoes";
        default:
            return;
        }
};