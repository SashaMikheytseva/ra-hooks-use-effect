import { useState, useEffect } from 'react';
import { List } from './components/List/List';
import { Details } from './components/Details/Details';
import './App.css'

function App() {
  const [dataList, setDataList] = useState([]);
  const [onSelectedItem, setOnSelectedItem] = useState(null);

  useEffect(() => {
    getSelected();
  }, []);

  async function getSelected() {
    try {
      const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`);
      if (response.ok) {
        const data = await response.json();
        setDataList(data);
      }
    } catch (error) {
        throw new Error;
    }
  }

  const selectItem = (id) => {
    setOnSelectedItem(id);
  }

  return (
    <div className='container'>
      <List dataList={dataList} selectItem={selectItem} onSelectedItem={onSelectedItem} />
      {onSelectedItem !== null && <Details id={onSelectedItem} />}
    </div>
  )
}

export default App
