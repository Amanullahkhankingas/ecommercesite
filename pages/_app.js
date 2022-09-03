import {useRouter} from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import LoadingBar from 'react-top-loading-bar'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let Router = useRouter()
     const [cart,setCart] =useState({})
     const [totalamount,setTotalamount] =useState(0)
     
  const [progress, setProgress] = useState(0)

    //  const [user,setUser] =useState({value:null})
     const [user,setUser] =useState({})
     const [key,setKey] =useState()
     const [dropDown,setDropDown] =useState(false)




     useEffect(()=>{
      try {
        Router.events.on('routeChangeStart', ()=>{
          setProgress(40)
        })
        Router.events.on('routeChangeComplete', ()=>{
          setProgress(100)
        })
        if(localStorage.getItem('cart')){
  
          setCart(JSON.parse(localStorage.getItem('cart')))
          // saveCart(JSON.parse(localStorage.getItem('cart')))
          
          // console.log("use effect is cart")
          
        }
        if(localStorage.getItem('amount')){
  
          
          setTotalamount(JSON.parse(localStorage.getItem('amount')))
          // console.log("use effect amount")

          
          
        }
        let token = localStorage.getItem('token')
        if(token){
          setUser({value:token})
          setKey(Math.random())
        }

       
      } catch (error) {
        console.error(error)
        localStorage.clear()
        
      }
    },[Router.query])

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


  const buyNow = (productCode,qty,name,price,size,variant)=>{
   let newCart={};
    newCart[productCode]={qty:1,name,price,size,variant}

    saveCart(newCart)
    setCart(newCart)

    Router.push('http://localhost:3000/checkout')
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

      

      const logout =()=>{
        localStorage.removeItem('token')
        setUser({value: null})
        setKey(Math.random())
      }

  return<>
        <Navbar logout={logout}  user={user} key={key} totalamount={totalamount} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}/>
   <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Component buyNow={buyNow} totalamount={totalamount} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
          <Footer/>
        </>
}

export default MyApp
