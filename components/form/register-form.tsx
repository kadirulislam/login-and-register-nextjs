import React from 'react'
import Button from '../button/button'
import FormInput from './input/input'
import Link from 'next/link'
import ActionLink from '../link/link'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'

export default function RegisterForm() {
  return (
    <div className='lg:w-1/6 max-md:w-full px-2 py-1  flex flex-col    justify-center'>
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
          <h3 className='text-2xl font-bold'>Create Account!</h3>
          <p>{`It's takes less than a minute, Enter your Email and Password.`}</p>
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
          <Button className='bg-primary-color ='>Create an Account</Button>
       
          <span className='hr-lines text-black/70'>or</span>
          <div className='w-full'>
            <ActionLink href={'#'}  ><FaGoogle fontSize={20} /> Continue with Google</ActionLink>
            <ActionLink href={'#'}  ><FaFacebook   fontSize={20} /> Continue with Facebook</ActionLink>
            <ActionLink href={'#'} ><FaApple  fontSize={20} /> Continue with Apple</ActionLink>
          </div>
          <div className='flex gap-3 pt-2'>
          <h4 className='text-md font-bold'>Already have an Account?</h4>
            <Link href={'/login'} className='text-primary-color font-bold'  > Log In</Link>
            </div>
        </div>
            
      </form>
    </div>
  )
}
