import './Cart.css'

const Cart = (props) => {

    console.log(props.items);

    const items = props.items;

    let price = 0;
    let shipping = 0;
    for (const item of items) {
        console.log(item.price);
        price = price + item.price;
        shipping = shipping + item.shipping;
    }

    return (
        <div>
                <div className='cart-container'>
                    <h4>Order Summary</h4>
                    <div className='cart-info'>
                        <p>Selected Items: {items.length}</p>
                        <p>Total Price: ${price}</p>
                        <p>Total Shipping Charge: ${shipping}</p>
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