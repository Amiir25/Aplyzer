import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignIn = () => {
    const navigate = useNavigate();
    const [signinError, setSigninError] = useState('');
    const [signinMsg, setSigninMsg] = useState(false);

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Enter a valid email address')
            .required('Email is required'),
        password: yup
            .string()
            .required('Password is required')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/sign-in', data);
            setSigninMsg(true);
            setTimeout(() => setSigninMsg(false), 3000);

            const user = response.data.user;
            navigate(`/user/dashboard/${user.id}`);
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
            setSigninError(errorMsg);
            setSigninMsg(true);
            setTimeout(() => setSigninMsg(false), 3000);
        }
    }
    
    return (
        <>
        <div className='flex items-center justify-center h-screen'>
            <div className='shadow-xl px-8 py-5 border border-[#02A9EB]/30 w-96'>
                
                <h2 className='text-xl font-bold mb-4'>
                    Welcome Back to Aplyzer
                    <span className='block text-sm font-light'>Let’s get you hired.</span>
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700' >Email</label>
                        <input id="email" type="email" placeholder='Enter your Email' 
                        className='w-full px-3 py-2 border border-gray-400'
                        { ...register('email') } />
                        {
                            errors.email &&
                            <p className='text-sm text-red-500'>{ errors.email.message }</p>
                        }
                    </div>
                    
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700' >Password</label>
                        <input id="password" type="password" placeholder='Create a password'
                        className='w-full px-3 py-2 border border-gray-400'
                        { ...register('password') } />
                        {
                            errors.password &&
                            <p className="text-sm text-red-500">{ errors.password.message }</p>
                        }
                    </div>

                    <button type='submit' className='w-full bg-gradient-main text-white py-2 rounded cursor-pointer'>
                        Sign in
                    </button>
                </form>

                <div className='text-center text-sm mt-2'>
                    <span>Already have an account? </span>
                    <Link to='/auth/signup' className='text-[#02A9EB]'>Sign up</Link>
                </div>

                {/* Sign in message */}
                <div className={ `${ signinMsg ? 'fixed' : 'hidden' } top-40 w-80 text-center` }>
                    <p className={`text-lg text-white p-2 rounded ${ signinError ? 'bg-red-600' : 'bg-green-600' }`}>
                        { signinError || 'Login Successfull' }
                    </p>
                </div>

            </div>
        </div>
        </>
    )
}

export default SignIn
