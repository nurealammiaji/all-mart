import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='product-area'>
                <p>Hello from product area</p>
            </div>
            <div className='cart-area'>
                <div className='cart-container'>
                    <h4>Order Summary</h4>
                    <div className='cart-info'>
                        <p>Selected Items: </p>
                        <p>Total Price: </p>
                        <p>Total Shipping Charge: </p>
                        <p>Tax: </p>
                        <h5>Grand Total: </h5>
                    </div>
                    <button>Clear Cart</button>
                    <br />
                    <button>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;