import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
     const [cart,setCart] =useState({})
     const [totalamount,setTotalamount] =useState(0)


     useEffect(()=>{
      try {
        if(localStorage.getItem('cart')){
  
          setCart(JSON.parse(localStorage.getItem('cart')))
          // saveCart(JSON.parse(localStorage.getItem('cart')))
          
          console.log("use effect is cart")
          
        }
        if(localStorage.getItem('amount')){
  
          
          setTotalamount(JSON.parse(localStorage.getItem('amount')))
          console.log("use effect amount")
          
        }
      } catch (error) {
        console.error(error)
        localStorage.clear()
        
      }
    },[])

  const saveCart=(SavingCartInLocalStorage)=>{
    localStorage.setItem("cart",JSON.stringify(SavingCartInLocalStorage))
    
    let keys =Object.keys(SavingCartInLocalStorage)

    let tamount=0;
    
     for(let i=0;i<keys.length;i++){
       tamount+= SavingCartInLocalStorage[keys[i]].price * SavingCartInLocalStorage[keys[i]].qty;
      }
      setTotalamount(tamount)
      localStorage.setItem("amount",JSON.stringify(tamount))
      
    //  console.log(typeof tamount)
    //  console.log(tamount)
  }

  const addToCart = (productCode,qty,name,price,size,variant)=>{
        let newCart = cart;
       if(productCode in cart){
         newCart[productCode].qty= cart[productCode].qty +1; 
       }
       else{
        newCart[productCode]={qty:1,name,price,size,variant};
       }

       saveCart(newCart)
       setCart(newCart)
      }
      
  const removeFromCart = (productCode,qty,name,price,size,variant)=>{
        let newCart = cart;
       if(productCode in cart){
         newCart[productCode].qty= cart[productCode].qty - 1
       }

       if(newCart[productCode]["qty"] <= 0){
        delete newCart[productCode]
       }

       saveCart(newCart)
       setCart(newCart)
      //  console.log(newCart[productCode].qty)
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
