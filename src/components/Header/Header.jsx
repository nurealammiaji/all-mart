import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div className='nav-logo'>
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className='nav-link'>
                <a href="#">Order</a>
                <a href="#">Order Review</a>
                <a href="#">Manage Inventory</a>
                <a href="#">Login</a>
            </div>
        </nav>
    );
};

export default Header;