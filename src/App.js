import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense';

function App() {
  const expense = [
    {title:"Expense1", date: new Date(), amount:400},
    {title:"Expense2", date: new Date(), amount:500},
    {title:"Expense3", date: new Date(), amount:600},
    {title:"Expense4", date: new Date(), amount:700},
  ]
  
  return (
    <div>
      <Expense expense={expense}></Expense>
    </div>
    
      
      
);
  
}

export default App;
