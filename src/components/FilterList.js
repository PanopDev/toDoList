import { useState } from "react";

function FilterList() {
  //  const [listFilter, listFilterSet] = useState(listItems.filter((a)=> a.item.includes(itemInput)))
  function handleFilters() {
    /*ort alphabetic ilter   
    
    .sort((a,b)=>{ 
      const aUpperCased= a.item.toUpperCase()
      const bUpperCased=b.item.toUpperCase()
  if (aUpperCased > bUpperCased ){return 1 }
  if (aUpperCased < bUpperCased ){return -1}
  else return 0
  }
  )
      
    */
    // filter checked false // listFilter = listItems.filter((a)=> {if (a.item.includes(itemInput) && a.checked === false ){ return {} }})
    // filter checked true // listFilter = listItems.filter((a)=> {if (a.item.includes(itemInput) && a.checked === true ){ return {} }})
    // listFilter = listItems.filter((a)=> a.item.toLowerCase().includes(itemInput.toLowerCase()))
    // listFilter = listItems.filter((a)=>a.checked === true)
    // listFilter = listItems.filter((a)=>a.checked == false)
    // listFilterSet(listItems.filter((a)=> a.item.includes(itemInput)))
    //   if (filterRef.current.value == 'Completed'){listFilterSet(listItems.filter((a)=> {if (a.item.includes(itemInput) && a.checked === true ){ return {} }}))}
    // else if (filterRef.current.value == 'Incomplete'){listFilterSet(listItems.filter((a)=> {if (a.item.includes(itemInput) && a.checked === false ){ return {} }}))}
  }

  const [filterValue, NewFilterValue] = useState("All Items");

  return (
    <>
      <label htmlFor="filterList">Filter by </label>
      <select
        id="filterList"
        // ref={filterRef}
        value={filterValue}
        onChange={(e) => {
          NewFilterValue(e.target.value);
        }}
      >
        <option>All Items</option>
        <option>Completed</option>
        <option>Incomplete</option>
      </select>
    </>
  );
}
export default FilterList;
