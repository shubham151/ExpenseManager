import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenceItem(props) {

  
  return (
    <div>
      <div className="expense-item">
          <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenceItem;
