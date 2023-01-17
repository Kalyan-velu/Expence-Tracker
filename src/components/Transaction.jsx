import React,{useContext} from 'react'
import { StateContext } from '../context/ContextProvide'

const Transaction = ({t}) => {
   const {deleteTransaction}=useContext(StateContext)
   const sign= t.amount < 0 ? '-' : '+'

  return (
    <>
      <li key={t.id} className={t.amount < 0 ?"minus":"plus"}>
             {t.text} <span>{sign} {`${Math.abs(t.amount)}$`}</span><button onClick={()=>deleteTransaction(t.id)} className="delete-btn">x</button>
      </li> 
    </>
  )
}

export default Transaction