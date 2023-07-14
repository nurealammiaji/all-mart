import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div>
                <img src={logo} alt="" />
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