import { useContext, useRef } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import Modal from './UI/Modal';
import UserProgreeContext from '../store/UserProgressContext';

function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgreeContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <>
            <header id="main-header">
                <div id="title">
                    <img src={logo} alt="Dine-logo"></img>
                    <div id="title">Radhe Bakers</div>
                </div>
                <nav>
                    <Button textOnly className="button" onClick={handleShowCart}>Cart ({totalCartItems}) </Button>
                </nav>
            </header>
        </>
    )
}

export default Header
