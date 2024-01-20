import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import Topics from './components/Topics/Topics'
import Info from './components/Info/Info'
import Blog from './components/Blog/Blog'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Topics/>
     <Info/>
     <Blog/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default App
