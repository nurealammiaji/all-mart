import { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../cart/Cart';
import './Shop.css';
import { useEffect } from 'react';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);

    const addToCart = (product) => {
        const newItems = [...items, product];
        setItems(newItems);
        addToDb(product.id);
    }

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='shop'>
            <div className='product-area'>
                <div className='product-container'>
                    {products.map(product => <Products key={product.id} product={product} addToCart={addToCart}></Products>)}
                </div>
            </div>
            <div className='cart-area'>
                <Cart items={items}></Cart>
            </div>
        </div>
    );
};

export default Shop;