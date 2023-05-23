import React from 'react';

const CheckBoxSteps = ({ stepsNum, stepsDescription, Num }) => {
  return (
    <div>
      <p className="step-num">
        {stepsNum} <span>{Num}</span>
      </p>
      <span className="desc">{stepsDescription}</span>
    </div>
  );
};

export default CheckBoxSteps;
