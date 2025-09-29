import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import HomePage from './Menu/HomePage/HomePage'
import PortfolioPage from './Menu/PortfolioPage/PortfolioPage'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'

const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/portfolio' element={<PortfolioPage />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App
