import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import  Shop from './pages/Shop';
import Footer from './components/Footer/Footer'
import blog_banner from './components/Assets/banner_blog.png'
import Blogs from './pages/Blogs';
import About from './pages/About';
import WellnessForm from './components/Quiz/WellnessForm';
import ChatBot from 'react-simple-chatbot';
import Login from './pages/login'
import ProductDisplay from './components/ProductDisplay/ProductDisplay';


function App() {
  return (
    <div >
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/plans' element={<ShopCategory banner={blog_banner} category="Plans"/>}/>
        <Route path="product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/Blogsww' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<LoginSignup/>}/> 
        <Route path="/quiz" element={<WellnessForm />} />
        <Route path="/all_productww" element={<ProductDisplay/>} />
      </Routes>


      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}
export default App;
