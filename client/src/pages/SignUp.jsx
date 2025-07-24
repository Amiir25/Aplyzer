import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSignupData = (e) => {
        setSignupData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = () => {
        alert(JSON.stringify(signupData));
    }
    
    return (
        <>
        <div className='flex items-center justify-center h-screen'>
            <div className='shadow-xl px-8 py-5 border border-[#F51D28]/30 w-96'>
                
                <h2 className='text-xl font-bold mb-4'>
                    Create Your Aplyzer Account
                    <span className='block text-sm font-light'>Track smarter. Apply better.</span>
                </h2>
                
                <form onSubmit={handleSubmit}>
                    
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-700' >Name</label>
                        <input id="name" type="text" placeholder='Enter your name' name='name'
                        onChange={handleSignupData}
                        className='w-full px-3 py-2 border border-gray-400' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700' >Email</label>
                        <input id="email" type="email" placeholder='Enter your Email' name='email'
                        onChange={handleSignupData}
                        className='w-full px-3 py-2 border border-gray-400' />
                    </div>
                    
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-gray-700' >Password</label>
                        <input id="password" type="password" placeholder='Create a password' name='password'
                        onChange={handleSignupData}
                        className='w-full px-3 py-2 border border-gray-400' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="confirmPassword" className='block text-gray-700' >Confirm Password</label>
                        <input id="confirmPassword" type="password" placeholder='Confirm your password' name='confirmPassword'
                        onChange={handleSignupData}
                        className='w-full px-3 py-2 border border-gray-400' />
                    </div>

                    <button type='submit' className='w-full bg-[#F51D28] text-white py-2 rounded cursor-pointer'>
                        Create Account
                    </button>
                </form>

                <div className='text-center text-sm mt-2'>
                    <span>Already have an account? </span>
                    <Link to='/signin' className='text-[#F51D28]'>Sign in</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp
