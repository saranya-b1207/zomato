import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Button from './../../Components/Elements/Button';
import { app } from '../../firebaseonfig';
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit} = useForm();
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async (data) => {
    setLoading(true);
    const authentication = getAuth();
    let uid = "";
    try {
      const userCredential = await createUserWithEmailAndPassword(authentication, data.email, data.password);
      uid = userCredential.user.uid;
      
      localStorage.setItem('User Id', uid);
      localStorage.setItem('Auth token', userCredential._tokenResponse.refreshToken);
      window.dispatchEvent(new Event("storage"));
      
      const response = await fetch('http://localhost:5500/api/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          _id: uid,
        }),
      });
  
      console.log("Backend response:", response);
      
      if (response.status === 200) {
        setLoading(false);
        toast.success('Account created successfully 🎉');
        navigate('/');
      } else {
        const error = await response.json();
        setLoading(false);
        toast.error("Failed to save user in the database");
        console.error("Backend Error:", error);
      }
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email Already In Use");
      } else {
        toast.error("An error occurred. Please try again.");
        console.error("Error:", error);
      }
    }
  };
  return (
    <div className='text-black h-screen flex items-center justify-center bg-black'>
      <div className='rounded-lg max-w-md w-full flex flex-col items-center justify-center relative'>
        <div className='absolute inset-0 transition duration-300 animate-ping blur gradient bg-gradient-to-tr  from-rose-500 to-yellow-500'></div>
          <div className='p-8  rounded-xl w-full bg-slate-500'>
          <h5 className='text-3xl text-black text-center font-serif font-semibold cursor-pointer'>Register</h5>
           <form className='w-full space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className='block text-lg font medium text-gray-200 py-1 px-2' >Name</label>
              <input type="text" {...register('name',{ required: "Name is required" })}
                id="name"
                className='block appearance-none w-full px-2 text-black py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200'
              />
            </div>
            <div>
              <label htmlFor="email" className='block text-lg font medium text-gray-200' >Email</label>
              <input type="email" {...register('email',{ required: "Name is required" })}
                id="email"
                className='block appearance-none w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200'
              />
            </div>
            <div>
              <label htmlFor="password" className='block text-lg font medium text-gray-200' >Password</label>
              <input type="password" 
              {...register('password',{ required: "Name is required" })}
              id="password"
              className='block appearance-none w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200'
              />
            </div>
            <Button size='large' className="bg-yellow-500 cursor-pointer">{loading ? "loading" : "Register"}</Button>
          </form>
          <ToastContainer />
        </div>

      </div>


    </div>
  )
}

export default Register

