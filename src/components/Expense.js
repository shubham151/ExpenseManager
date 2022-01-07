import ExpenceItem from "./ExpenceItem";
import '../css/Expense.css'

function Expense(props) {
  let data = [];
  const expense = props.expense;
  
  for (let itr in expense) {
    data.push(
      <ExpenceItem
        title={expense[itr].title}
        amount={expense[itr].amount}
        date={expense[itr].date}
      >
      </ExpenceItem> 
    );
  }
  return data;
}

export default Expense;
