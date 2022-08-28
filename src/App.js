import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import ProductsPage from './components/Products';
import ProductPage from './components/Product';
import FAQs from './components/FAQ';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="products" element={<ProductsPage/>}/>
      <Route path="product/:productId" element={<ProductPage/>}/>
      <Route path="faqs" element={<FAQs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
