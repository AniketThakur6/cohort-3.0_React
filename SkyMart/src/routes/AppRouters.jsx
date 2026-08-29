import { Navigate, Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import AboutPage from './../pages/AboutPage';
import ProductDetails from '../components/ProductDetails';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouters = () => {
  return (  
    <Routes >
      <Route path='/' element={<Navigate to="/home"  replace />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/products' element={<ShopPage />} />       
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products/:id' element={<ProductDetails />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouters