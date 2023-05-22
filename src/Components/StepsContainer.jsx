import React from 'react';
import CheckBoxSteps from './CheckBoxSteps';
import CheckBox from './CheckBox';

const StepsContainer = () => {
  return (
    <div className="steps-container">
      <div className="authenticate">
        <CheckBox />
        <div className="num">
          <CheckBoxSteps stepsNum="step1" />
          <CheckBoxSteps stepsDescription="step2" />
        </div>
      </div>

      <div className="authenticate">
        <CheckBox />
        <div className="num">
          <CheckBoxSteps stepsNum="step2" />
          <CheckBoxSteps stepsDescription="step2" />
        </div>
      </div>
      <div className="authenticate">
        <CheckBox />
        <div className="num">
          <CheckBoxSteps stepsNum="step3" />
          <CheckBoxSteps stepsDescription="step2" />
        </div>
      </div>
      <div className="authenticate">
        <CheckBox />
        <div className="num">
          <CheckBoxSteps stepsNum="step4" />
          <CheckBoxSteps stepsDescription="step2" />
        </div>
      </div>
      <div className="authenticate">
        <CheckBox />
        <div className="num">
          <CheckBoxSteps stepsNum="final step" />
          <CheckBoxSteps stepsDescription="step2" />
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
