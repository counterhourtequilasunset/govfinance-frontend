import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fazer a requisição à API do backend
    axios.get('http://localhost:5000/api/dados')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <div className="kpi-card">
          <h3>KPI 1</h3>
          <p>{data.kpi1}</p>
        </div>
        <div className="kpi-card">
          <h3>KPI 2</h3>
          <p>{data.kpi2}</p>
        </div>
        {/* Adicione mais KPIs conforme necessário */}
      </div>
    </div>
  );
};

export default Dashboard;
