import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ItemListContainer />
    </>
  )
}

export default App
