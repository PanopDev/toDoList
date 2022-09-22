import './App.css';
import ListBody from './components/ListBody';
import HeaderContent from './components/HeaderContent';
import NewListItemInput from './components/NewListItemInput.js'
import { useState } from 'react';
import SortList from './components/SortList.js';
import FilterList from './components/FilterList.js'



function App() {
  const [itemInput, setItemInput] = useState('')
  const [listItems, listItemsNew] = useState(JSON.parse(localStorage.getItem('listItems')) || [])


  return (
    <div className="App">
      <HeaderContent />
      <NewListItemInput
        listItems={listItems}
        listItemsNew={listItemsNew}
        itemInput={itemInput}
        setItemInput={setItemInput}
      />
      <FilterList
        itemInput={itemInput}
        listItems={listItems}
      />
      <SortList />
      <ListBody
        listItems={listItems}
        listItemsNew={listItemsNew}
        itemInput={itemInput}

      />
      <br />
    </div>
  );
}

export default App;
