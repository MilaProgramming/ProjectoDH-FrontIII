import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                CUPHEAD
            </div>

            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">Inicio</Link></li>
                <li className="navbar-item"><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
