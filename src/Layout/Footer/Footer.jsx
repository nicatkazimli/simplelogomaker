import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title">Servislər</h2>
      <div className="footer-boxes">
        <div className="box">
          <h3>Kreativ Dizayn</h3>
          <p>Unikal ideyaları vizual həllərə çeviririk.</p>
          <p>Hər dizayn müştərinin tələbinə uyğun formalaşdırılır.</p>
          <p>Estetik və funksionallığı birləşdiririk.</p>
        </div>
        <div className="box">
          <h3>Brendinq</h3>
          <p>Markanızı tanıdan güclü vizual kimlik yaradırıq.</p>
          <p>Brend hekayənizi kreativ üslubda təqdim edirik.</p>
          <p>Logo və rənglərdə davamlılıq təmin edirik.</p>
        </div>
        <div className="box">
          <h3>İstifadəçi İnterfeysi</h3>
          <p>Sadə və rahat naviqasiya ilə interfeyslər dizayn edirik.</p>
          <p>Hər klikdə müsbət istifadəçi təcrübəsi yaradırıq.</p>
          <p>Adaptiv və modern UI həlləri təklif edirik.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

