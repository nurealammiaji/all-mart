import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Orders.css';
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {

    const items = useLoaderData();
    const [cart, setCart] = useState(items);

    const itemRemove = (_id) => {
        console.log(_id);
        const remaining = cart.filter(pd => pd._id !== _id);
        setCart(remaining);
        removeFromDb(_id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div className="orders-container">
                <div className="review-item">
                    {
                        cart.map(item => <ReviewItem key={item._id} item={item} itemRemove={itemRemove}></ReviewItem>)
                    }
                </div>
                <div className="cart-item">
                    <Cart items={cart} clearCart={clearCart}>
                        <Link to="/checkout"><button className="review-btn">Checkout</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;