import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {

    const {name, seller, price, img, ratings} = props.product;
    const addToCart = props.addToCart;

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-image'>
                    <img src={img} alt="" />
                </div>
                <div className='card-info'>
                    <h4>{name}</h4>
                    <p>Price: ${price} </p>
                    <small>Manufacturer: {seller}</small>
                    <br />
                    <small>Rating: {ratings} Stars</small>
                </div>
            </div>
            <div className='card-button'>
                <button onClick={()=>{addToCart(props.product)}}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Products;