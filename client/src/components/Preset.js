import React from 'react';

const Preset = ( { preset, setSelectedPreset, selectedPreset, setGrid }) => {

  const setSelected = () => {
    setSelectedPreset(preset.name);
    preset.func(setGrid);
  }

  return (
    <div>
      <button onClick={setSelected} 
              style={{backgroundColor: `${selectedPreset === preset.name ? '#e9deea' : 'white'}`}}>
        {preset.name}
      </button>
    </div>
  )
}

export default Preset