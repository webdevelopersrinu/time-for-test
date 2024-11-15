import React from 'react'
import { useSelector } from 'react-redux'
import RestorentItem from './RestorentItem'

function Cart() {
    const cartItems =useSelector(store=>store.cart.items)
    console.log(cartItems)
  return (
    <div className='w-8/12 mx-auto'>
        <h1 className='text-center text-2xl font-bold p-2'>Cart</h1>
        {
            cartItems?.length > 0 && cartItems.map(item=>{
             return   <RestorentItem restorentData={item} key={item.id} />
            }) 
        }
    </div>
  )
}

export default Cart