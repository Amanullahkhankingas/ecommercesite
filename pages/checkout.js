import React from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle ,AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
const Chectout = ({cart,clearCart,totalamount,addToCart, removeFromCart}) => {
  return (
    <>
      <div className="container m-auto">
        <h1 className="text-center font-bold text-3xl my-3 ">Checkout</h1>
        <h2 className="font-bold text-xl my-3 mx-2 ">Delivery Details!</h2>
        <div className="mx-auto flex">
          
            
            <div className="px-2 w-1/2">
              <label htmlFor="name" className="leading-7 text-md font-bold text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="px-2 w-1/2">
              <label htmlFor="email" className="leading-7 text-md font-bold text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            </div>

          <div className="flex mb-2">
            <div className="px-2 w-full">
              <label htmlFor="address" className="leading-7 text-md font-bold text-gray-600">Adress</label>
              <textarea type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" cols={10} rows={2}></textarea>
            </div>
          </div>

          <div className="flex mb-2">
            <div className="px-2 w-1/2">
              <label htmlFor="phone" className="leading-7 text-md font-bold text-gray-600">Phone</label>
              <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="px-2 w-1/2">
              <label htmlFor="city" className="leading-7 text-md font-bold text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

          </div>

          <div className="flex mb-2">
            <div className="px-2 w-1/2">
              <label htmlFor="state" className="leading-7 text-md font-bold text-gray-600">Stete</label>
              <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="px-2 w-1/2">
              <label htmlFor="pinCode" className="leading-7 text-md font-bold text-gray-600">PinCode</label>
              <input type="number" id="pinCode" name="pinCode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>

          </div>

      <h2 className="font-bold text-xl my-3 mx-2 ">Review Cart Items  Buy</h2>
      <div className='sideCart  h-full  bg-pink-50 py-6  px-8 m-2 '>
            {(Object.keys(JSON.parse(JSON.stringify(cart))).length == 0) && <div>You have no items in the cart </div>}

            <ol className='list-decimal font-semibold'>
              {Object.keys(JSON.parse(JSON.stringify(cart))).map((itemkey)=>{
               return <li key={itemkey}>
                <div className="item flex my-2">
                <div className=' '>{cart[itemkey].name}({cart[itemkey].size}/{cart[itemkey].variant})</div>
                <div className=' w-1/3 flex justify-center items-center text-xl'>
                 <AiFillMinusCircle className='text-pink-500 cursor-pointer' onClick={()=>{removeFromCart(itemkey,1,cart[itemkey].name,cart[itemkey].price,cart[itemkey].size,cart[itemkey].variant)}}/>
                  <span className='text-xl'>{cart[itemkey].qty}</span>
                   <AiFillPlusCircle className='text-pink-500 cursor-pointer' onClick={()=>{addToCart(itemkey,1,cart[itemkey].name,cart[itemkey].price,cart[itemkey].size,cart[itemkey].variant)}}/>
                </div>
                </div>
              </li>})}
               </ol>
               <span className='font-bold'>SubTotal:{totalamount}</span>
            
          </div>
          <div className="mx-4">
               <button className="flex   mt-2 text-white bg-pink-500 border-0 py-2 px-3 focus:outline-none hover:bg-pink-600 rounded text-md"><BsFillBagCheckFill className='m-1' />Buy {totalamount}</button> 
               </div>


      </div>
    </>
  )
}

export default Chectout
