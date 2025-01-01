import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import img from '../../assets/others/authentication1.png'
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()
    const {handleSingIn} = useAuth()
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])
    const handleValidateCaptcha = e => {
        const value = e.target.value
        if(validateCaptcha(value)){
             setDisabled(false)
        }
        else{
            setDisabled(false)
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value
        handleSingIn(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success('user sign in successfully')
          navigate(location?.state? location?.state : '/')
        })

    }
    return (
        <div className="hero bg-gray-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
             <img src={img} alt="" />
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-3xl font-bold text-center py-3">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleValidateCaptcha} placeholder="Type The Captcha" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button disabled = {disabled} className='btn btn-primary' type='submit'>Login</button>
              </div>
            </form>
            <p className='p-5 text-sm text-center'>Do Not Have An Account? <Link to = '/signup' className="text-red-500">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;