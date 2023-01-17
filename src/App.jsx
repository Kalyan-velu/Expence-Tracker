import Header from './components/Header'
import Balance from './components/Balance.jsx'
import './App.css'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
function App() {  
  return (
    <div >
      <Header/>
      <div className={"container"}>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
      </div>
    </div>
  )
}

export default App
