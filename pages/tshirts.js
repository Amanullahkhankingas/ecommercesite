import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mongoose from 'mongoose'
import Product from '../models/Product'

const Tshirts = ({products}) => {
  console.log(products)
  return (
    <div>
       <section className="text-black-500 bg-white-900 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-wrap -m-4">
      {products.map((item)=>{return <div key={item} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg md:mx-3 ">  { /*start*/ } 
      <Link href={'/product/this is the product'}><a className="block  overflow-hidden">
          <img alt="brand-T-Shirt" className="object-cover object-top  h-full block" src={item.image}/>
        </a>
        </Link>

        <div className="mt-4">
          <h3 className="text-black-500 text-xs text-bold tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray title-font text-lg font-medium">{item.color}</h2>
          <p className="mt-1">Rs ${item.price}</p>
        </div>
      </div>})}  { /*end*/ }
      
     
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if(!mongoose.connections[0].readyState){
    await  mongoose.connect("mongodb://localhost:27017/codeswear?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false")

}
const products = await Product.find({category:"tshirts"})
   console.log(products)


  return {
    props: {products:JSON.parse(JSON.stringify(products))}, 
  }
}

export default Tshirts
