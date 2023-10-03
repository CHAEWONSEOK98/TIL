# React Bottom-Up Communicate

```
// 자식 - 부모 컴포넌트 통신(상향식)

// index - src - components - ExpenseForm
// index - src -  components - NewExpense
// index - App

// ExpenseForm
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // handleSaveExpenseData 함수를 여기서 실행
    // expenseData 값을 NewExpense 컴포넌트의 handleSaveExpenseData함수 매개변수로 받음

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
};

// NewExpense
const NewExpense = (props) => {
  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};

// handleSaveExpenseData함수는 NewExpense 컴포넌트에서 바로 실행되지 않는다.
// 함수를 가리키는 포인터. 함수를 가리키는 포인터가 ExpenseForm으로 전달되는 것.

const App = () => {
  const handleAddExpense = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
    </div>
  );
};
```
