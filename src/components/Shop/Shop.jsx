import Cart from '../cart/Cart';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='product-area'>
                <p>Hello from product area</p>
            </div>
            <div className='cart-area'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;