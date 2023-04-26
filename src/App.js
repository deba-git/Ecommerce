import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';



function App() {
  return (
    <div className="App">
      <shopCOntextProvider>
          <Router>
           <Navbar/> 
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Router>
          </shopCOntextProvider>
    </div>
  );
}
/* In react router dom: whatever you put inside of the <route> will
// change depending on what route you are in,but if i put nnavbar above the <route> it present all the pages,*/

export default App;
