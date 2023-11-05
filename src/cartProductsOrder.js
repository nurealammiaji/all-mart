import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('https://all-mart-server.vercel.app/products');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const _id in storedCart) {
        const addedProduct = products.find(pd => pd._id === _id);
        if (addedProduct) {
            const quantity = storedCart[_id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProductsLoader;