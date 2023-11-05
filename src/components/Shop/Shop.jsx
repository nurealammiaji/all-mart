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
    const [totalProducts, setTotalProducts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    // All Data Loading
    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        fetch('http://localhost:5000/totalProducts')
        .then(res => res.json())
        .then(data => setTotalProducts(data.total));
    }, [])

    // Partial Data Loading
    useEffect(() => {
        async function fetchData () {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage])

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
    // const itemsPerPage = 10; //Make dynamic
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Dynamic Items Per Page
    const options = [6, 12, 21, 30];
    const handleSelectChange = (event) => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    }


    // Method: 1
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    // console.log(pageNumber);

    // Method: 2
    // const pageNumbers = [...Array(totalPages).keys()];

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