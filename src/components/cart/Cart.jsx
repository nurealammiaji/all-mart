import './Cart.css';

const Cart = (props) => {

    const items = props.items;

    let price = 0;
    let shipping = 0;
    let tax = 0;
    let total = 0;

    for (const item of items) {
        price = price + item.price;
        shipping = shipping + item.shipping;
        tax = price * 7 / 100;
        total = price + shipping + tax;
    }

    return (
        <div>
                <div className='cart-container'>
                    <h4>Order Summary</h4>
                    <div className='cart-info'>
                        <p>Selected Items: {items.length}</p>
                        <p>Total Price: ${price}</p>
                        <p>Total Shipping Charge: ${shipping}</p>
                        <p>Tax: ${tax.toFixed(2)}</p>
                        <h5>Grand Total: ${total.toFixed(2)}</h5>
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