import React, {useState} from 'react';

function CitySelector({onSearch, setCity}) {
  
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <div className="citySelector glassCard">
      <input
        type="text"
        placeholder="Enter City"
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        onClick={onSearch}
      >Check Weather</button>
    </div>
  );
}

export default CitySelector;
