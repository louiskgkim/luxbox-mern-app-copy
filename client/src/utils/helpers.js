export const idbPromise = (storeName, method, object) => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('shop-shop', 1);
        let db, tx, store;
        request.onupgradeneeded = function (e) {
            const db = request.result;
            db.createObjectStore('products', { keyPath: '_id' });
            db.createObjectStore('shoppingBag', { keyPath: '_id' });
            db.createObjectStore('wishlist', { keyPath: '_id' });
            db.createObjectStore('categories', { keyPath: '_id' });
            db.createObjectStore('designers', { keyPath: '_id' });
            db.createObjectStore('colors', { keyPath: '_id' });
        };

        request.onerror = function (e) {
            console.log('There was an error');
        };

        request.onsuccess = function (e) {
            db = request.result;
            tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName);

            db.onerror = function (e) {
                console.log('error', e);
            };

            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function () {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            tx.oncomplete = function () {
                db.close();
            };
        };
    });
};

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

export const decodeSpace = (str) => {
    return str.replace("%20", " ");
};

export const flattenObj = (obj) => {
    let resultObj = {};

    for (const key in obj) {
        if (key === "__typename" || key === "_id") {
            continue;
        }
        else if ((typeof obj[key]) === "object") {
            const nestedObj = flattenObj(obj[key]);
            for (const subKey in nestedObj) {
                resultObj[key + '.' + subKey] = nestedObj[subKey];
            }
        }
        else {
            if ((typeof obj[key]) === "string") {
                if (obj[key].includes(" ")) {
                    for (let i = 0; i < obj[key].split(" ").length; i++) {
                        resultObj[key + '.' + i] = obj[key].toLowerCase().split(" ")[i];
                    }
                }
                resultObj[key] = obj[key].toLowerCase();
            }
        }
    }

    return resultObj;
};