import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-block">
        <div className="left">
          <img src='https://i.pravatar.cc/150?img=12' alt="Logo" className="floating-img" />
        </div>
        <div className="right">
          <h2>Amal Rasulov — LogoMaker</h2>
          <p>Hər bir ideyanı vizuala çevirir.</p>
          <p>Fərdi üslubu ilə brendlərə ruh verir.</p>
          <p>Minimalist və modern dizaynları üstün tutur.</p>
          <p>Yaradıcılıq və keyfiyyəti birləşdirir.</p>
          <p>Hər layihəyə xüsusi yanaşır.</p>
          <p>Müştəri məmnuniyyəti onun üçün prioritetdir.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
