import { useState } from 'react';
import './App.css';
import Allcards from './component/Allcards';
import Heading from './component/heading';
import { data } from './utils/data';

function App() {
  const [val, setVal] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  function filterHandler() {
    const res = data.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredData(res);
  }

  return (
    <>
      <Heading />
      <div className="search">
        <input
          type="text"
          placeholder="search your items"
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={filterHandler}>search</button>
      </div>
      <Allcards data={filteredData} />
    </>
  );
}

export default App;