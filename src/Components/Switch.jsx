 import React from 'react';

const Switch = ({ isOn, handleToggle , onColor}) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        onColor ={onColor}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
       style={{ background: isOn && '#fd3d39' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;