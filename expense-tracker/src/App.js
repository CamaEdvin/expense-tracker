import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Item 1',
      amount: 5000,
      date: new Date(2022, 6, 12),
    },
    {
      id: 'e2',
      title: 'Item 2',
      amount: 2000,
      date: new Date(2022, 6, 12),
    },
    {
      id: 'e3',
      title: 'Item 3',
      amount: 3000,
      date: new Date(2022, 6, 12),
    },
    {
      id: 'e4',
      title: 'Item 4',
      amount: 4000,
      date: new Date(2022, 6, 12),
    },
    {
      id: 'e5',
      title: 'Item 5',
      amount: 6000,
      date: new Date(2022, 6, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
