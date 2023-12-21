import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpensePage from './components/Expense_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ExpensePage></ExpensePage>
    </div>
  )
}

export default App
