import { useState } from 'react'
import './App.css'
import './StudentDetailsComponent/StudentDetails.css'
import StudentDetails from './StudentDetailsComponent/StudentDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentDetails/>
    </>
  )
}

export default App
