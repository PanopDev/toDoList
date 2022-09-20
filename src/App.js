import './App.css';
import ListBody from './components/ListBody';
import HeaderContent from './components/HeaderContent';
import NewListItemInput from './components/NewListItemInput.js'
import { useState } from 'react';

function App() {
  const listItemsTemp = [
    { id: 1, item: "Eggs", checked: false },
    { id: 2, item: "Bacon", checked: false },
    { id: 3, item: "Sausage", checked: false }
];

const [listItems,listItemsNew] = useState(listItemsTemp)
  // const listObj = {id:1, item:'get some eggs' }

  return (
    <div className="App">
     <HeaderContent/>
     <NewListItemInput
     listItems={listItems} 
     listItemsNew={listItemsNew} 
     />
     <ListBody
     listItems={listItems} 
     listItemsNew={listItemsNew}
 
     />
     <br />
    </div>
  );
}

export default App;
