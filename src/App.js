import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import ProductsPage from './components/Products';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
