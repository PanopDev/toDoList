import './App.css';
import ListBody from './components/ListBody';
import HeaderContent from './components/HeaderContent';
import NewListItemInput from './components/NewListItemInput.js'
import { useState,useRef } from 'react';
import SortList from './components/SortList.js';
import FilterList from './components/FilterList.js'
import DeleteCompleted from './components/DeleteCompleted';


function App() {
  const [listItems, listItemsNew] = useState(JSON.parse(localStorage.getItem('listItems')) || [])
  const [itemInput, setItemInput] = useState('')
  
  const [listFilter,listFilterSet]  = useState(listItems.filter((a) => a.item.includes(itemInput)))
  const filterRef = useRef()
//const listFilter = listItems.filter((a) => a.item.includes(itemInput))

function handleFilter(listItems){
 if (filterRef.current.value === 'Incomplete') {listFilterSet(listItems.filter((a)=> {if (a.item.toLowerCase().includes(itemInput) && a.checked === false ){ return {} }}))}
 else if (filterRef.current.value === 'Completed') {listFilterSet(listItems.filter((a)=> {if (a.item.toLowerCase().includes(itemInput) && a.checked === true ){ return {} }}))}
 else  {listFilterSet(listItems.filter((a)=> a.item.toLowerCase().includes(itemInput.toLowerCase())))}
}

function setAndSaveStates(myList){
  listItemsNew(myList)
  localStorage.setItem('listItems', JSON.stringify(myList))
  handleFilter(myList)
}

  function handleChecked(id) {
    const myList = listItems.map((li) => id == li.id ? { ...li, checked: !li.checked } : li)
    setAndSaveStates(myList)
  }
  function handleDelete(id) {
    const myList = listItems.filter((item) => item.id !== id)
    setAndSaveStates(myList)
  }



  return (
    <div className="App">
      <HeaderContent />
      <NewListItemInput
        listItems={listItems}
        itemInput={itemInput}
        setItemInput={setItemInput}
        setAndSaveStates={setAndSaveStates}
        handleFilter={handleFilter}
      />
      <FilterList
        itemInput={itemInput}
        listItems={listItems}
        filterRef={filterRef}
        handleFilter={handleFilter}
      />
      <SortList />
      <DeleteCompleted />
      <ListBody
        listItems={listItems}
        listFilter={listFilter}
        handleChecked = {handleChecked}
        handleDelete = {handleDelete}
        
      />
      <br />
    </div>
  );
}

export default App;
