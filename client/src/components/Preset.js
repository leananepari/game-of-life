import React from 'react';

const Preset = ( { preset, setSelectedPreset, selectedPreset }) => {

  const setSelected = () => {
    setSelectedPreset(preset.name)
  }
  
  return (
    <div>
      <button onClick={setSelected} 
              style={{backgroundColor: `${selectedPreset === preset.name ? 'gray' : 'white'}`}}>
        {preset.name}
      </button>
    </div>
  )
}

export default Preset