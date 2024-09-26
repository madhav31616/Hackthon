import React from 'react';
import './styles/Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>$9.99/month</p>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>$19.99/month</p>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>$49.99/month</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
