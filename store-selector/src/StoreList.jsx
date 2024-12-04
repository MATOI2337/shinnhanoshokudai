import React from 'react';

function StoreList({ stores }) {
  return (
    <div style={{ marginTop: '20px' }}>
      {stores.map((store, index) => (
        <div key={index} style={{ marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
          <h2>{store.name}</h2>
          <p>住所: {store.address}</p>
          <p>電話番号: {store.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default StoreList;
