import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pood" element={<Shop />} />
          <Route path="toode/:id" element={<ProductDetail />} />
          <Route path="meist" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
