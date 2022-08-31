import React from 'react'
// import { FaBeer } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle ,AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';



const Navbar = ({addToCart, removeFromCart, cart, totalamount, clearCart}) => {

  const ref = useRef()
  // console.log(cart.this.qty)


  const handleSideCart= ()=>{
    // e.prevertDefault
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.contains('translate-x-full')
    ref.current.classList.remove('translate-x-full')
    ref.current.classList.add('translate-x-0')

    }
    else if(ref.current.classList.contains('translate-x-0')){
      ref.current.classList.contains('translate-x-0')
    ref.current.classList.remove('translate-x-0')
    ref.current.classList.add('translate-x-full')

    }
  }

  return (
    <div>
      <div className="navbar flex flex-col justify-center   md:justify-start md:flex-row  mx-2 mt-3 border-b-2  shadow-md">
        <div className="logo mx-auto md:mx-20 md:ml-12">
        <Link href={'/login'}><a><Image src="/logo1.png" width={200} height={40} alt="logo"/></a></Link>
          {/* <img src="logo.png" width={200} height={40} alt="logo"/> */}
        </div>
        <div className="nav flex text-sm md:text-xl my-1   ">
          <ul className='flex space-x-4 font-bold mx-auto  md:mx-0'>
            <Link href={'/tshirts'}>< a className="hover:underline active:text-gray-500 hover:text-pink-800">T-Shirts</a></Link>
            <Link href={'/hoodies'}>< a className="hover:underline active:text-gray-500 hover:text-pink-800">Hoodies</a></Link>
            <Link href={'/mugs'}>< a className="hover:underline active:text-gray-500 hover:text-pink-800">Mugs</a></Link>
            <Link href={'/stickers'}>< a className="hover:underline active:text-gray-500 hover:text-pink-800">Stickers</a></Link>
          </ul>
        </div>
          <div className="cart flex text-2xl cursor-pointer absolute top-1 right-1 md:right-3 md:top-3 md:text-4xl">
          <Link href={"/login"}><a><MdAccountCircle/></a></Link>

            <div className='ml-4' onClick={handleSideCart}><AiOutlineShoppingCart/></div>
          </div>

          {/* shoping card design */}                      
          <div ref={ref} className='sideCart  h-full w-72 overflow-y-scroll absolute top-0 right-0 bg-pink-100 py-10  px-8 translate-x-full transform transition-transform'>
            {(Object.keys(JSON.parse(JSON.stringify(cart))).length == 0) && <div>You have no items in the cart </div>}
            <h2 className="font-bol text-2xl font-bold text-center">Shopping Cart</h2>
            <span onClick={handleSideCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500 '><AiFillCloseCircle/></span>

            <ol className='list-decimal font-semibold'>
              {Object.keys(JSON.parse(JSON.stringify(cart))).map((itemkey)=>{
               return <li key={itemkey}>
                <div className="item flex my-2">
                <div className=' w-2/3 '>{`${cart[itemkey].name}(${cart[itemkey].size}/${cart[itemkey].variant})`}</div>
                <div className=' w-1/3 flex justify-center items-center text-xl'>
                 <AiFillMinusCircle className='text-pink-500 cursor-pointer' onClick={()=>{removeFromCart(itemkey,1,cart[itemkey].name,cart[itemkey].price,cart[itemkey].size,cart[itemkey].variant)}}/>
                  <span className='text-xl'>{cart[itemkey].qty}</span>
                   <AiFillPlusCircle className='text-pink-500 cursor-pointer' onClick={()=>{addToCart(itemkey,1,cart[itemkey].name,cart[itemkey].price,cart[itemkey].size,cart[itemkey].variant)}}/>
                </div>
                </div>
              </li>})}
              
              
            </ol>

             <div className='flex '>

            <button className="flex mr-2  mt-10 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-md"><BsFillBagCheckFill className='m-1' /><Link href={'/checkout'}><a>Checkout</a></Link></button> 
            <button className="flex mr-2  mt-10 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-md" onClick={clearCart}>Clear Cart</button> 
             </div>
          </div>


      </div>
        
     
    </div>
  )
}

export default Navbar
