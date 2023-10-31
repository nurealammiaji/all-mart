import './Cart.css';

const Cart = ({items, clearCart, children}) => {

    let price = 0;
    let shipping = 0;
    let tax = 0;
    let total = 0;
    let quantity = 0;

    for (const item of items) {
        item.quantity = item.quantity || 1;
        price = price + item.price * item.quantity;
        shipping = shipping + item.shipping;
        tax = price * 7 / 100;
        total = price + shipping + tax;
        quantity = quantity + item.quantity;
    }

    return (
        <div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <div className='cart-info'>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${price}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <h5>Grand Total: ${total.toFixed(2)}</h5>
                </div>
                <div className='cart-button'>
                    <button onClick={clearCart} className='btn-clear-cart'>Clear Cart</button>
                    <br />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Cart;