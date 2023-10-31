import { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';
import { useEffect } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=> {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Step 1: Get the ID
        for (const _id in storedCart) {
            // Step 2: Get the Product using ID
            const addedProduct = products.find(product => product._id === _id);
            // Step 3: Get Quantity of the Product
            if (addedProduct) {
                const quantity = storedCart[_id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setItems(savedCart);
    }, [products])

    const addToCart = (product) => {
        const newItems = [...items, product];
        setItems(newItems);
        addToDb(product._id);
    }

    const clearCart = () => {
        setItems([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop'>
            <div className='product-area'>
                <div className='product-container'>
                    {products.map(product => <Products key={product._id} product={product} addToCart={addToCart}></Products>)}
                </div>
            </div>
            <div className='cart-area'>
                <Cart items={items} clearCart={clearCart}>
                    <Link to="/orders"><button className="review-btn">Order Review</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;