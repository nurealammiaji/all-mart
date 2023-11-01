import { useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';
import { useEffect } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Step 1: Get the ID
        for (const _id in storedCart) {
            // Step 2: Get the Product using ID
            const addedProduct = products.find(product => product._id === _id);
            // Step 3: Get Quantity of the Product
            if (addedProduct) {
                const quantity = storedCart[_id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setItems(savedCart);
    }, [products])

    const addToCart = (product) => {
        const newItems = [...items, product];
        setItems(newItems);
        addToDb(product._id);
    }

    const clearCart = () => {
        setItems([]);
        deleteShoppingCart();
    }

    // Pagination Calculation
    const totalProducts = products.length;
    // const itemsPerPage = 10; //ToDo: Make dynamic
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Dynamic Items Per Page
    const options = [5, 10, 15, 20];
    const handleSelectChange = (event) => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }


    // Method: 1
    // const pageNumber = [];
    // for (let i = 1; i <= totalPages; i++) {
    //     pageNumber.push(i);
    // }
    // console.log(pageNumber);

    // Method: 2
    const pageNumbers = [...Array(totalPages).keys()];



    return (
        <div className='shop'>
            <div className='product-area'>
                <div className='product-container'>
                    {products.map(product => <Products key={product._id} product={product} addToCart={addToCart}></Products>)}
                </div>
                <br />
                <div>
                    <div className='pagination'>
                        {
                            pageNumbers.map(pageNumber => <button key={pageNumber} className={currentPage === pageNumber ? 'selected' : 'pagination-btn'} onClick={() => setCurrentPage(pageNumber)} >{pageNumber}</button>)
                        }
                    </div>
                    <div className='page-info'>
                        <p>Page No: {currentPage}</p>
                        <p>Items Per Page:
                            <select value={itemsPerPage} onChange={handleSelectChange}>
                                {
                                    options.map(option => <option key={option} value={option}>{option}</option>)
                                }
                            </select>
                        </p>
                    </div>
                </div>
            </div>
            <div className='cart-area'>
                <Cart items={items} clearCart={clearCart}>
                    <Link to="/orders"><button className="review-btn">Order Review</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;