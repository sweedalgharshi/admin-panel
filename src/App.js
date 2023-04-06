import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/homepage/Home';
import UserList from './pages/userList/UserList';
import User from './pages/User-page/User';
import NewUser from './pages/new-user/NewUser';
import ProductList from './pages/product-list/ProductList';
import Product from './pages/products/Product';
import NewProduct from './pages/new-product/NewProduct';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
