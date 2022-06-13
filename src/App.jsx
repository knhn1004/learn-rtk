import { useEffect } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { calcTotal } from './features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector(s => s.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotal());
  }, [cartItems]);

  return (
    <div className="App">
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default App;
