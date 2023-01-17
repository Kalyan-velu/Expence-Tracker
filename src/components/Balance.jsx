import React, { useContext , useEffect, useState} from 'react'
import { StateContext } from '../context/ContextProvide'


const Balance = () => {
   const {transactions}=useContext(StateContext)
   const [total,setTotal]=useState('')
   const amounts=transactions.map((t)=>t.amount)
   useEffect(() => {
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
      setTotal(total)
   }, [transactions])
   
   return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{total}</h1>
    </>
  )
}

export default Balance