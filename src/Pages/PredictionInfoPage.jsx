import React from 'react';
import PredictionInfo from '../Components/PredictionInfo';

const PredictionInfoPage = () => {
  return (
    <div className="dashboard-container">
      <div className="left-sidebar"></div>
      <div className="main-dashboard">
        <div className="top-bar">
          <h1>home</h1>
        </div>
        <div className="content-container"></div>
        <PredictionInfo />
      </div>
    </div>
  );
};

export default PredictionInfoPage;
