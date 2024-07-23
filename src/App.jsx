
import './App.css'
import Main from './components/Main'
import LastPage from './components/finishResult/LastPg'
import { useState } from 'react'

function App() {
  const [rate, setRate] = useState()
  const [submit, setSubmit] = useState(true)
  return (
    <>
      {submit ?
        <Main rate={rate} setRate={setRate} setSubmit={setSubmit} />
        :
        <LastPage rate={rate}/>
      }
    </>
  )
}

export default App
