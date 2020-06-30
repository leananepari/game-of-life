import React from 'react';

const Preset = ( { preset, setSelectedPreset, selectedPreset, setGrid, setGeneration, selectedPresetRef }) => {

  const setSelected = () => {
    setSelectedPreset(preset.name);
    selectedPresetRef.current = preset.name;
    setGeneration(0);
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