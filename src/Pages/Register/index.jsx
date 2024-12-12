import { useState } from 'react'
import { useForm } from 'react-hook-form';
import Button from './../../Components/Elements/Button';
// import { app } from "../../firebaseonfig";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  
  const onSubmit=(data)=>{
    setLoading(true);
    const authentication=getAuth();
    let uid="";
    createUserWithEmailAndPassword(authentication,data.email,data.password)
          .then((response)=>{
            uid=response.user.uid;
            sessionStorage.setItem('User Id',uid);
            sessionStorage.setItem('Auth token',response._tokenResponse.refreshToken)
            window.dispatchEvent(new Event("storage"))
          })
          .catch((error)=>{
            if(error.code==="auth/email-already-in-use"){
              toast.error('Email Already In Use')
            }
          })
          fetch('http://localhost:5500/api/create-user',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              email:data.email,
              name:data.name,
              _id:uid 
            })
          }).then((response)=>{
            if(response.status===200){
              setLoading(false);
              toast.success('Account created successfully 🎉',{
                position:"top-right",
                autoClose:5000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress:undefined,
                theme:'dark'
              });
              navigate('/');
            }else{
              console.log(response.json());
            }
          }).catch((error)=>{
            setLoading(false);
          })
  }
  return (
    <div className='text-black h-screen flex items-center justify-center bg-black'>
      <div className='rounded-lg max-w-md w-full flex flex-col items-center justify-center relative'>
        <div className='absolute inset-0 transition duration-300 animate-ping blur gradient bg-gradient-to-tr  from-rose-500 to-yellow-500'></div>
        <h5 className='text-3xl text-white font-serif font-semibold'>Register</h5>
          <div className='p-8  rounded-xl w-full bg-slate-500'>
           <form className='w-full space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className='block text-lg font medium text-gray-200 py-1 px-2' >Name</label>
              <input type="text" {...register('name')}
                id="name"
                className='block appearance-none w-full px-2 text-black py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200'
              />
            </div>
            <div>
              <label htmlFor="email" className='block text-lg font medium text-gray-200' >Email</label>
              <input type="email" {...register('email')}
                id="email"
                className='block appearance-none w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200'
              />
            </div>
            <div>
              <label htmlFor="password" className='block text-lg font medium text-gray-200' >Password</label>
              <input type="password" 
              {...register('password')}
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
