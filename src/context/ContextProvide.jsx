import React,{createContext,useReducer} from 'react'
import Reducer from './Reducer'
const InitialState={
   transactions:[]
   }

   export const StateContext = createContext(InitialState);

//provider component

   export const Provider=({children})=>{
   const [state,dispatch]=useReducer(Reducer,InitialState)

   function deleteTransaction(id){
      dispatch({type:'DELETE',payload:id})
   }
   function addTransaction(transaction){
      dispatch({type:'ADD',payload:transaction})
   }

   return(
      <StateContext.Provider value={{
         transactions:state.transactions,
         deleteTransaction,
         addTransaction
      }}>
         {children}
      </StateContext.Provider>
   )
}