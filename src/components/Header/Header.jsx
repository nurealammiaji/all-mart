import './Header.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider } from '../../Providers/Providers';

const Header = () => {

    const { user, logout } = useContext(AuthProvider);

    const logoutHandler = () => {
        logout()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <nav className='nav-bar'>
            <div className='nav-logo'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className='nav-link'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/login">Login</Link>
                {user && <><small>{user.email}</small><button onClick={logoutHandler}>Logout</button></>}
            </div>
        </nav>
    );
};

export default Header;