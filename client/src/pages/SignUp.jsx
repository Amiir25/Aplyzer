import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUp = () => {
    const navigate = useNavigate();
    const [formError, setFormError] = useState('');
    const [showSignupMsg, setShowSignupMsg] = useState(false);

    // Form validation
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('username is required')
            .matches(/^[A-Za-z0-9]+$/, "Username must not include special characters"),
        email: yup
            .string()
            .required('Email is required')
            .email('Enter a valid email address'),
        password: yup
            .string()
            .required("Password is required")
            .min(4, "Password must be at least 4 characters")
            .max(30, "Password shouldn't be more than 30 characters."),
        confirmPassword: yup
            .string()
            .required("You have to confirm your password")
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:3000/auth/sign-up', data);
            setFormError('');
            setShowSignupMsg(true);
            
            // 3 seconds delay before navigation
            setTimeout(() => {
                setShowSignupMsg(false)
                navigate('/');
            },3000);
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Somthing went wrong. Please try again.';
            setFormError(errorMsg);
            setShowSignupMsg(true);
            setTimeout(() => setShowSignupMsg(false), 3000);
        }
    }
    
    return (
        <>
        <div className='flex items-center justify-center h-screen'>
            <div className='shadow-xl px-8 py-5 border border-[#F51D28]/30 w-96'>
                
                <h2 className='text-xl font-bold mb-4'>
                    Create Your Aplyzer Account
                    <span className='block text-sm font-light'>Track smarter. Apply better.</span>
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    
                    <div className='mb-4'>
                        <label htmlFor="username" className='block text-gray-700' >Name</label>
                        <input id="username" type="text" placeholder='Enter a username'
                        className='w-full px-3 py-2 border border-gray-400'
                        { ...register('username') } />
                        { 
                            errors.username &&
                            <p className='text-sm text-red-600'>{ errors.username.message }</p> 
                        }
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700' >Email</label>
                        <input id="email" type="email" placeholder='Enter your Email'
                        className='w-full px-3 py-2 border border-gray-400'
                        { ...register('email') } />
                        { 
                            errors.email &&
                            <p className='text-sm text-red-600'>{ errors.email.message }</p> 
                        }
                    </div>
                    
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700' >Password</label>
                        <input id="password" type="password" placeholder='Create a password'
                        className='w-full px-3 py-2 border border-gray-400'
                        { ...register('password') } />
                        { 
                            errors.password &&
                            <p className='text-sm text-red-600'>{ errors.password.message }</p> 
                        }
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="confirmPassword" className='block text-gray-700' >Confirm Password</label>
                        <input id="confirmPassword" type="password" placeholder='Confirm your password'
                        className='w-full px-3 py-2 border border-gray-400'
                        { ...register('confirmPassword') } />
                        { 
                            errors.confirmPassword &&
                            <p className='text-sm text-red-600'>{ errors.confirmPassword.message }</p> 
                        }
                    </div>

                    {/* Submit button */}
                    <input
                    type='submit'
                    value='Create Account'
                    className='w-full bg-[#F51D28] text-white py-2 rounded cursor-pointer' />
                </form>

                <div className='text-center text-sm mt-2'>
                    <span>Already have an account? </span>
                    <Link to='/signin' className='text-[#F51D28]'>Sign in</Link>
                </div>

                {/* Sign up message */}
                <div className={`${ showSignupMsg ? 'fixed' : 'hidden' } top-20 w-80 text-center`}>
                    <p className={`text-lg text-white p-2 rounded ${ formError ? 'bg-red-500' : 'bg-green-500' }`}>
                      { formError || 'Registration Successful' }  
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp
