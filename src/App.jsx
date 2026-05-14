
import React, { useState } from 'react';

const charts = [
  {
    name: 'Polar Bar',
    file: 'polar_bar.html',
  },
  {
    name: 'Polar Line',
    file: 'polar_line.html',
  },
  {
    name: 'Polar Scatter',
    file: 'polar_scatter.html',
  },
];

function App() {
  const [selectedChart, setSelectedChart] = useState(charts[0].file);

  return (
    <div className="App" style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Climate Charts App</h1>
      <nav style={{ marginBottom: 16 }}>
        {charts.map((chart) => (
          <button
            key={chart.file}
            onClick={() => setSelectedChart(chart.file)}
            style={{
              marginRight: 8,
              padding: '8px 16px',
              background: selectedChart === chart.file ? '#1976d2' : '#eee',
              color: selectedChart === chart.file ? '#fff' : '#222',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
          >
            {chart.name}
          </button>
        ))}
      </nav>
      <div style={{ border: '1px solid #ccc', borderRadius: 8, overflow: 'hidden', minHeight: 500 }}>
        <iframe
          title={selectedChart}
          src={`/${selectedChart}`}
          style={{ width: '100%', height: 600, border: 'none' }}
        />
      </div>
    </div>
  );
}

export default App;
