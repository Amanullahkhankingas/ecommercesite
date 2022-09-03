import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
import { useEffect } from 'react';


const Forgot = () => {
  let router = useRouter();
  
  useEffect(()=>{
    if(localStorage.getItem('token')){
      
      router.push('/')
    }
  },[])
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center my-16 flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">

              <img className='mx-auto h-12 w-auto mb-8' src='logo.png'></img>
              <form>
                  <p className="text-3xl font-bold text-center mb-16 mr-4">Forgot Password</p>
               

                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Or  <span  className="text-pink-600 hover:text-pink-700 focus:text-pink-700 transition duration-200 ease-in-out"><Link href={"/login"}>Log In</Link></span></p>
                  
                  
                 
                </div>
                 

                {/* <!-- Email input --> */}

                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                    id="email" name='email'
                    placeholder="Email address"
                  />
                </div>




                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Continue
                  </button>
                
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Forgot
