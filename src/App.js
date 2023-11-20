import './App.css';
import React, { useState } from 'react';
function App() {
  const [text, setText] = useState('');
  localStorage.setItem('text', "text");

  return (
    <div className="App">
      <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div dangerouslySetInnerHTML={{ __html: text }}></div>

    </div>
  );
}

export default App;
