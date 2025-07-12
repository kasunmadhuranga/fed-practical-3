// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// function App() {

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
