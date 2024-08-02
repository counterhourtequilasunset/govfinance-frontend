import React from 'react';
import './KPIComponent.css';

const KPIComponent = ({ title, value }) => {
  return (
    <div className="kpi-component">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default KPIComponent;
