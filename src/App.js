import './App.css';
import ListBody from './components/ListBody';
import HeaderContent from './components/HeaderContent';
import NewListItemInput from './components/NewListItemInput.js'
import { useState,useRef, useEffect } from 'react';
import SortList from './components/SortList.js';
import FilterList from './components/FilterList.js'
import DeleteCompleted from './components/DeleteCompleted';


function App() {
  const initialListItemsState = JSON.parse(localStorage.getItem('listItems')) || [];
  const [listItems, listItemsNew] = useState(initialListItemsState);
  const [itemInput, setItemInput] = useState('');
 
const [listFilter,listFilterSet]  = useState(listItems.filter((a) => a.item.includes(itemInput)))
  //
   const filterRef = useRef()

useEffect(()=>console.log('list Items changed'),[listItems])
useEffect(()=>console.log(listItems),[listItems])
useEffect(()=>console.log('itemInput changed'),[itemInput])
useEffect(()=>console.log(itemInput),[itemInput])
useEffect(()=>console.log('list Filter changed'),[listFilter])
useEffect(()=>console.log(listFilter),[listFilter])

useEffect(()=>handleFilter(listItems) ,[itemInput])

//let listFilter = listItems.filter((a) => a.item.includes(itemInput))


 function deleteAll(){
  const myList = listItems.filter((a)=>a.checked==false)
  localStorage.setItem('listItems', JSON.stringify(myList))
  handleFilter(myList)

setAndSaveStates(myList)
  }

function handleFilter(listItems){
  
  
    if (filterRef.current.value === 'Incomplete') {console.log(1);listFilterSet(listItems.filter((a)=> {if (a.item.toLowerCase().includes(itemInput) && a.checked === false ){ return {} }}))}
    else if (filterRef.current.value === 'Completed') {console.log(2);listFilterSet(listItems.filter((a)=> {if (a.item.toLowerCase().includes(itemInput) && a.checked === true ){ return {} }}))}
    else if (filterRef.current.value === 'All Items') {console.log(3);listFilterSet(listItems.filter((a)=> a.item.toLowerCase().includes(itemInput.toLowerCase())));}
        
//~~~~~~~~~~~~~~~~NEED TO CHANGE BACK TO USESTATE FOR THE LISTFILTER ONCE BUG IS
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
        listItemsNew={listItemsNew}
      />
      <FilterList
        itemInput={itemInput}
        listItems={listItems}
        filterRef={filterRef}
        handleFilter={handleFilter}
        listItemsNew={listItemsNew}
        initialListItemsState={initialListItemsState}
      />
      <SortList />
      <DeleteCompleted 
       deleteAll={deleteAll}
      />
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
