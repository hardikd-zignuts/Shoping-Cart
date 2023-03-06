import { useState } from "react";
import AppBar from "./components/AppBar";
import Cart from './components/Cart.jsx'
import Shop from './components/Shop.jsx'

function App() {
  const [isShown, setIsShow] = useState(false)
  return (
    <div className="App">
      <AppBar setIsShow={setIsShow} />
      {
        isShown &&
        <>
          <div id="cart" className='w-25 mx-auto my-5 rounded p-4 '>
            <Cart />
          </div>
        </>
      }

      <div className='w-50 mx-auto border-1 rounded p-4 '>
        <h4 className='text-light text-center mb-4'>BUY YOUR FAVORITE PRODUCTS</h4>
        <Shop />
      </div>
    </div>
  );
}

export default App;
