import React from 'react';

const CheckBoxSteps = ({ stepsNum, stepsDescription }) => {
  return (
    <div>
      <p>{stepsNum}</p>
      <span>{stepsDescription}</span>
    </div>
  );
};

export default CheckBoxSteps;
