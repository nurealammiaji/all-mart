import { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../cart/Cart';
import './Shop.css'
import { useEffect } from 'react';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='shop'>
            <div className='product-area'>
                {products.map(product => <Products key={product.id} product={product}></Products>)}
            </div>
            <div className='cart-area'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;