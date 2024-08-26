import { createContext, useState } from "react";

export const MartContext = createContext(null);

const MartContextProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);

const addToCart = (car) => {
  setCart([...cart, car]);
  // setCart((prev) => [...prev, car]);
};

const removeFromCart = (carId) => {
  setCart(cart.filter((car) => car.id !== carId));
};

const clearCart = () => {
  setCart([])
}


  return (
    <MartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart}}>
      {children}
    </MartContext.Provider>
    );
};

export default MartContextProvider;
