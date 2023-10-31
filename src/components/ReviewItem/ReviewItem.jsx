import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ReviewItem =({item, itemRemove}) => {

    const {id, img, name, price, quantity} = item;

    return (
        <div className='item-container'>
            <div className="item-image">
                <img src={img} alt="" />
            </div>
                <div className='item-detail'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Product Quantity: {quantity}</p>
                </div>
                <div className='trash-button'>
                    <button onClick={()=> itemRemove(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
        </div>
  )
}

export default ReviewItem;