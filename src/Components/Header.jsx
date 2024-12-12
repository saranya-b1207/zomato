import React from 'react'
import logo from '../assets/Images/logo.jpeg';
import carticon from "../assets/Images/carticon.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from './Elements/Button';
import { useState, useEffect } from "react";

const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('Auth token');
    sessionStorage.removeItem('User Id');
    window.dispatchEvent(new Event("storage"))
    navigate("/");
  }
  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorege.getItem('Auth token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }

    window.addEventListener('storage',checkAuthToken);

    return()=>{
      window.removeEventListener('storage',checkAuthToken);
    }
  },[])

  return (
    <nav id='header' className='bg-black text-white'>
      <div className='w-auto container mx-auto flex flex-wrap item-center justify-between mt-0 py-2'>
        <div className='logo-wrapper flex item-center'>
          <Link to="/">
            <img src={logo} alt="logo" className='w-24 m-2 rounded-md' />
          </Link>
        </div>
        <div className='nav-menu-wrapper flex items-center justify-between space-x-1 text-xl'>
          <Link to="/" className='text-xl font-serif text-red-600 underline'>Home</Link>
          <Link to="/about" className='px-4 text-xl font-serif text-red-600 underline'>About Us</Link>
        </div>

        <div className='flex items-center justify-center space-x-1 text-xl'>
          <Link to="/cart" className='relative'>
            <img src={carticon} alt="carticon" className='w-8 ml-1' />
            {cartCount > 0 ? <div className='rounded-full bg-yellow-400 text-black inline-flex justify-center items-center w-5 absolute-top-1-right-1'>{cartCount}</div> : null}
          </Link>
          {
            isLoggedIn ?
              <Button onClick={handleLogout}>Log Out</Button> : (
                <>
                  <Link to="/register" className='mx-2 px-2 py-2 font-serif rounded bg-yellow-300 text-black hover:bg-yellow-500'>Sign up</Link>
                  <Link to="/login" className='w-16 m-1 p-2 rounded bg-yellow-300 text-black font-serif hover:bg-yellow-500 '>login</Link>
                </>
              )
          }
        </div>
      </div>
    </nav>
  )
}

export default Header
