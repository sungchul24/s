import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');

  const handleCelsiusChange = (n) => {
    const celsiusValue = n.target.value;
    setCelsius(celsiusValue);
  };

  const fahrenheit = celsius !== '' ? (celsius * 9/5 + 32).toFixed(2) : '';
  const boilingVerdict = celsius !== '' && parseFloat(celsius) >= 100 ? '물이 끓습니다.' : '물이 끓지 않습니다.';

  return (
    <div className="App">
      <h1>섭씨를 화씨로 변환하기</h1>
      <div>
        <label>
          섭씨:
          <input 
            type="number" 
            value={celsius} 
            onChange={handleCelsiusChange} 
          />
        </label>
      </div>
      <div>
        <label>
          화씨:
          <input 
            type="text" 
            value={fahrenheit} 
            readOnly 
          />
        </label>
      </div>
      <div>
        <p>{boilingVerdict}</p>
      </div>
    </div>
  );
}

export default App;