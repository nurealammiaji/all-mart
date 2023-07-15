import './Products.css'

const Products = (props) => {
    console.log(props);
    const {name} = props.product;
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-image'>
                    <img src="" alt="" />
                </div>
                <div className='card-info'>
                    <h4>{name}</h4>
                    <p>Price: $ </p>
                    <small>Manufacturer: </small>
                    <br />
                    <small>Rating: </small>
                </div>
            </div>
            <div className='card-button'>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;