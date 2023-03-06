import AppBar from "./components/AppBar";
import Cart from './components/Cart.jsx'
import Shop from './components/Shop.jsx'

function App() {
  return (
    <div className="App">
      <AppBar />
      <div className='container border-1 my-5 bg-secondary rounded p-4 '>
        <Cart />
      </div>
      <div className='container'><hr /></div>
      <div className='container border-1 my-5 bg-secondary rounded p-4 '>
        <h1 className='text-light'>Buy Your Favorite Products Here</h1>
        <Shop />
      </div>
    </div>
  );
}

export default App;
