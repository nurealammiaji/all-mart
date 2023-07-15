import './Cart.css'

const Cart = () => {
    return (
        <div>
                <div className='cart-container'>
                    <h4>Order Summary</h4>
                    <div className='cart-info'>
                        <p>Selected Items: </p>
                        <p>Total Price: </p>
                        <p>Total Shipping Charge: </p>
                        <p>Tax: </p>
                        <h5>Grand Total: </h5>
                    </div>
                    <div className='cart-button'>
                        <button className='btn-clear-cart'>Clear Cart</button>
                        <br />
                        <button className='btn-review-order'>Review Order</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;