import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
     const [cart,setCart] =useState({})
     const [totalamount,setTotalamount] =useState({})


     useEffect(()=>{
      try {
        if(localStorage.getItem('cart')){
  
          setCart(JSON.parse(localStorage.getItem('cart')))
          console.log("use effect is running")
        }
      } catch (error) {
        console.error(error)
        localStorage.clear()
        
      }
    },[])

  const saveCart=(SavingCartInLocalStorage)=>{
        let tamount;
    localStorage.setItem("cart",JSON.stringify(SavingCartInLocalStorage))

     let keys =Object.keys(SavingCartInLocalStorage)

     for(let i=0;i<keys.length;i++){
       tamount+=  SavingCartInLocalStorage[keys[i]].qty * SavingCartInLocalStorage[keys[i]].price
     }
    setTotalamount(tamount)

  }

  const addToCart = (productCode,qty,name,price,size,variant)=>{
        let newCart = cart;
       if(productCode in cart){
         newCart[productCode].qty= cart[productCode].qty +1; 
       }
       else{
        newCart[productCode]={qty:1,name,price,variant};
       }

       saveCart(newCart)
       setCart(newCart)
       console.log(newCart[productCode].qty)
      }
      
  const removeFromCart = (productCode,qty,name,price,size,variant)=>{
        let newCart = cart;
       if(productCode in cart){
         newCart[productCode].qty= cart[productCode].qty - 1; 
       }

       else if(newCart[productCode].qty<=0){
        delete newCart[productCode]
       };

       saveCart(newCart)
       setCart(newCart)
       console.log(newCart[productCode].qty)
  }

  const clearCart=()=>{
    setCart({})
    saveCart({})
  }

      

  return<>
          <Navbar totalamount={totalamount} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}/>
        <Component  totalamount={totalamount} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
          <Footer/>
        </>
}

export default MyApp
