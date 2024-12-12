import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Menu from "../Pages/Menu";
import Cart from "../Pages/Cart";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from './../Components/Footer';
import About from "../Components/About";

const Navigation=()=>{
  const productsInCart=useSelector(cartProducts);
  return(
        <BrowserRouter> 
        <Header cartCount={productsInCart?productsInCart.length:0}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
        </BrowserRouter> 
    )
}

export default Navigation;
