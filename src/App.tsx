import { Fragment, useState } from 'react';
import Header from '@/components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from '@/components/Cart/Cart';
import '@/App.css';
import { CartContextProvider } from '@/store/cart-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
