import React from 'react'
import Head from "next/head"
import Layout from '../layout/layout'
import Link from "next/link"
import {IoLogoApple} from "react-icons/io"
import {FcGoogle} from 'react-icons/fc'
import Image from 'next/image'

import { useSession, signIn, signOut } from "next-auth/react"
function Register() {
    async function handleGoogleSignin(){
        console.log('first')
        signIn('google',{callbackUrl:"http://localhost:3000"})
    }

  return (
    <Layout>
    <Head>
        <title>Register</title>
    </Head>
    <div className='p-6 flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>Register Here</h1>
        <p className='font-medium' >Create Your Account </p>

        <form className='flex flex-col gap-2
        '>
            <div className='flex gap-11 mt-3 mb-5'>
            <div className='cursor-pointer flex items-center justify-center bg-white gap-2 rounded-[10px] px-5 ' type='submit' onClick={handleGoogleSignin}>
            <p className='align-baseline'><FcGoogle/></p><p className='font-thin'>Sign in with Google</p>
            </div>

            <button className='cursor-pointer flex items-center justify-center bg-white gap-2 rounded-[10px] py-1 px-5 ' type='submit'>
                <p><IoLogoApple/></p><p  className='font-thin'>Sign in with apple</p>
            </button>
            </div>

            <div className='bg-white p-6 rounded-xl' > 
               
            <label htmlFor="email" className=''>Email Address</label>
             <br/>
            <input 
                className='bg-[#F5F5F5] mt-3 mb-4 w-full px-3 py-3 rounded-[10px]'
                name="email"
                type="email"
                id="email"
                placeholder="shivv9761@gmail.com"
               
                
                />
            <br/>
            <label htmlFor="password">Password</label>
             <br/>
            <input 
                className='bg-[#F5F5F5] mt-3 mb-4 w-full px-3 py-3 rounded-[10px]'
                name="password"
                type="password"
                id="password"
                placeholder="Abc@12345"
               
                
                />
            <br/>
            <label htmlFor="Cpassword">Confirm Password</label>
             <br/>
            <input 
                className='bg-[#F5F5F5] mt-3 mb-4 w-full px-3 py-3 rounded-[10px]'
                name="Cpassword"
                type="password"
                id="Cpassword"
                placeholder="Abc@12345"
               
                
                />


                


                <button type='submit' className='w-full p-2 font-bold mt-5 rounded-[10px] text-white bg-black'>Create Your Account</button>
            </div>
        </form>
  
    </div>
    </Layout>
  )
}

export default Register