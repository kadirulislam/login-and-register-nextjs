'use client'
import React from 'react'
import Button from '../button/button'
import FormInput from './input/input'

export default function LoginForm() {
    return (
        <div className='lg:w-1/6 max-md:w-full px-2 py-2  flex flex-col    justify-center'>
            <form >
                <div className='Logo-area'>
                    <svg
                        width="25"
                        height="32"
                        viewBox="0 0 76 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
                    </svg>
                  
                </div>
                <div className='title-desc-area my-2 flex flex-col gap-2'>
                    <h3 className='text-2xl font-bold'>Welcome Back!</h3>
                    <p>Enter your Email Address and Password.</p>
                </div>
                <div className='form-inputs-section flex flex-col gap-2'>
                    <FormInput
                        type='email'
                        placeholder='Email'
                    />
                    <FormInput
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <div className='form-action-area flex flex-col justify-center items-center gap-4'>
                    <Button type='button' className='bg-primary-color ='>Log In</Button>
                    <h4 className='text-md font-bold'>Forget Password?</h4>
                    <span className='hr-lines text-black/70'>or</span>
                    <Button type='link' link={'/register'} >Create an Account</Button>
                </div>
            
            </form>
        </div>
    )
}
