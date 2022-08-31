import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mongoose from 'mongoose'
import Product from '../models/Product'

const Hoodies = ({ products }) => {
  console.log(products)
  return (
    <div>
      <section className="text-black-500 bg-white-900 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length===0 && <p>Sorry All the Hoodies are currently out of stock. New stock comming soon. Stay tuned</p>}
            {Object.keys(products).map((item) => {
              return <div key={products[item].title} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg md:mx-3 ">  { /*start*/}
                <Link href={`/product/${products[item]["slug"]}`}><a className="block  overflow-hidden">
                  {/* <img alt="brand-T-Shirt" className="object-cover object-top  h-full block" src={products[item.image]} /> */}
                  <img alt="brand-T-Shirt" className="object-cover object-top  h-full block" src={'/T-shirt1.jpg'} />
                </a>
                </Link>

                <div className="mt-4">
                  <h3 className="text-black-500 text-xs  tracking-widest title-font mb-1">T-Shirts</h3>
                  <h2 className="text-black-700 text-md font-bold tracking-widest title-font mb-1">{products[item].title}</h2>
                  <p className="mt-1">Rs ${products[item].price}</p>
                  <div className="text-gray title-font text-lg mt-2">
                    {products[item].size.includes('S') && <span className='border border-b-slate-200 mx-1 px-1'>S</span>}
                    {products[item].size.includes('M') && <span className='border border-b-slate-200 mx-1 px-1'>M</span>}
                    {products[item].size.includes('L') && <span className='border border-b-slate-200 mx-1 px-1'>L</span>}
                    {products[item].size.includes('XL') && <span className='border border-b-slate-200 mx-1 px-1'>XL</span>}
                    {products[item].size.includes('XXL') && <span className='border border-b-slate-200 mx-1 px-1'>XXL</span>}
                    </div>
                  <div className="mt-2">
                    {products[item].color.includes("red") &&  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes("blue") &&  <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes("green") &&  <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('pink') &&  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('gray') &&  <button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('white') &&  <button className="border-2 border-gray-300 ml-1 bg-white-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('purple') &&  <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {products[item].color.includes('yellow') &&  <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    
                    </div>
                </div>
              </div>
            })}  { /*end*/}


          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect("mongodb://localhost:27017/codeswear?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

  }
  const products = await Product.find({ category: "hoodies" })
  // const products = await Product.find()
  //  console.log(products)

  let hoodies = {};

  for (let item of products) {
    if (item.title in hoodies && item.availableyQty > 0) {
      if (!hoodies[item.title].color.includes(item.color) && item.availableyQty > 0) {
        hoodies[item.title].color.push(item.color)
      }
      if (!hoodies[item.title].size.includes(item.size) && item.availableyQty > 0) {
        hoodies[item.title].size.push(item.size)
      }
    }
    else {
      hoodies[item.title] = (JSON.parse(JSON.stringify(item)))
      if (item.availableyQty > 0) {
        hoodies[item.title].color = [item.color]
        hoodies[item.title].size = [item.size]
      }
    }
  }


  return {
    props: { products: JSON.parse(JSON.stringify(hoodies)) },
  }
}

export default Hoodies
