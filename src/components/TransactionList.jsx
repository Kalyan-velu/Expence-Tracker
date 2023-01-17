import React,{useContext, useRef} from 'react'
import { StateContext } from '../context/ContextProvide'
import Transaction from './Transaction'
const TransactionList = () => {
   const {transactions,addTransaction}=useContext(StateContext)
   const text = useRef(null)
   const amount = useRef(null)

   const handleSubmit=(e)=>{
      e.preventDefault()
      const transaction={
         id:Math.floor(Math.random()*1000),
         amount:Number(amount.current.value),
         text:text.current.value
      }
      addTransaction(transaction)
      text.current.value=null
      amount.current.value=null
   }
  return (
   <>
   <h3>History</h3>
      <ul id="list" className="list">
         {transactions.map((t)=>
            <Transaction key={t.id} t={t}/>
         )}       
      </ul>

      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" ref={text} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" ref={amount} id="amount" placeholder="Enter amount..." />
        </div>
        <button type="submit" className="btn">Add transaction</button>
      </form>
   </>
  )
}

export default TransactionList