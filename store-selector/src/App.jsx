import React, { useState } from 'react';
import storeData from './storeData.json';
import StoreList from './StoreList';

function App() {
  const [region, setRegion] = useState('東北'); // デフォルトで東北を選択

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>店舗情報</h1>
      <label>
        地域を選択:
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ marginLeft: '10px', padding: '5px' }}
        >
          {Object.keys(storeData).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <StoreList stores={storeData[region]} />
    </div>
  );
}

export default App;
