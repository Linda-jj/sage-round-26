import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './page/Home';
import About from './page/About'
import PageNotFound from './page/PageNotFound';
import Products from './page/Products';
import Layout from './page/Layout';
import Dashbord from './page/Dashbord';
import Product from './page/Product';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path= 'about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:item' element={<Product/>}/>
      </Route>
      
      <Route path='/dashbord' element={<Dashbord/>} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
