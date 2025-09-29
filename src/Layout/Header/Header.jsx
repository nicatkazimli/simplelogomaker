import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">LogoMaker</div>
        <nav className="nav">
          <Link to="/" className="nav-link">Əsas səhifə</Link>
          <Link to="/portfolio" className="nav-link">Haqqımda</Link>
        </nav>
      </div>

      <div className="about">
        <img src="https://i.pravatar.cc/150?img=12" alt="Amal Rasulov" />
        <p className="name">Amal Rasulov</p>
        <p className="description">
          “Amal Rasulov — hər bir ideyanı unudulmaz vizuala çevirən, fərdi üslubu ilə brendlərə ruh verən istedadlı logomaker.”
        </p>
      </div>
    </header>
  )
}

export default Header
