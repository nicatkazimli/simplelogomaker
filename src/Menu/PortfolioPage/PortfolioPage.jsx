// PortfolioPage.jsx
import React from 'react';
import { logoArray } from '../../Data/GlobalLogo';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const basic = logoArray.filter(logo => logo.category === 'basic');
  const medium = logoArray.filter(logo => logo.category === 'medium');
  const premium = logoArray.filter(logo => logo.category === 'premium');

  return (
    <div className="portfolio-container">
      <div className="category-column">
        <h2>Basic</h2>
        <div className="logo-grid">
          {basic.map(logo => (
            <div key={logo.id} className="logo-box">
              <img src={logo.image} alt={logo.title} />
              <h3>{logo.title}</h3>
              <p>{logo.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="category-column">
        <h2>Medium</h2>
        <div className="logo-grid">
          {medium.map(logo => (
            <div key={logo.id} className="logo-box">
              <img src={logo.image} alt={logo.title} />
              <h3>{logo.title}</h3>
              <p>{logo.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="category-column">
        <h2>Premium</h2>
        <div className="logo-grid">
          {premium.map(logo => (
            <div key={logo.id} className="logo-box">
              <img width={150} height={150} src={logo.image}  alt={logo.title} />
              <h3>{logo.title}</h3>
              <p>{logo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;