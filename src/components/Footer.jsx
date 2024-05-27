import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Торгуемые ценные бумаги</Link>
                    </li>
                    <li>
                        <Link to="/auth">Авторизация</Link>
                    </li>
                    <li>
                        <Link to="/boughtsec">Инвестиционный портфель</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
};

export default Footer;