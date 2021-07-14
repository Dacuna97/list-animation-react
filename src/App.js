import React, { useState } from 'react';
import Section from './Section';
import './App.css';

function App() {
  const [expand, setExpand] = useState(false);
  const items = ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item'];
  const items2 = ['item2', 'item2', 'item2', 'item2', 'item2', 'item2', 'item2', 'item2', 'item2'];
  return (
    <div className='list'>
      <h1 className='title' onClick={() => setExpand(!expand)}>
        Section title
      </h1>
      <div className={`list-items ${expand ? 'list-items-show' : 'list-items-hide'}`}>
        {items.map((item, index) => (
          <Section item={item} index={index} key={index} subItems={items2} expand={expand} />
        ))}
      </div>
    </div>
  );
}

export default App;
