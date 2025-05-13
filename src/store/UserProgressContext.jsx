import { createContext, useContext, useState } from "react";

const UserProgreeContext = createContext({
    progress : '',
    showCart : () => {},
    hideCart : () => {},
    showCheckout : () => {},
    hideCheckout : () => {}
});

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    
    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        console.log("hide cart clicked");
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    const userProgressCtx = {
        progress : userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };

    return (
        <UserProgreeContext.Provider value = {userProgressCtx}>
            {children}
        </UserProgreeContext.Provider>
    )
}

export default UserProgreeContext;