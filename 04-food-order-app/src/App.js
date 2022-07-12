import { useState } from 'react';
import './App.css';
import Cart from './components/app/cart/cart';
import Meals from './components/app/meal/meals';
import Header from './components/layout/header/header';

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartButtonClickHandler = () => {
    setShowCart(true);
  };

  const onCloseModalHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart onClose={onCloseModalHandler} />}
      <Header onClickCartButton={cartButtonClickHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
