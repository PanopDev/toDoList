import { useState } from "react";

function FilterList({filterRef,handleFilter,listItems,listItemsNew,initialListItemsState,initItemsTest}) {


  const [filterValue, NewFilterValue] = useState("All Items");

  return (
    <>
      <label htmlFor="filterList">Filter by </label>
      <select
        id="filterList"
        ref={filterRef}
        value={filterValue}
        onChange={(e) => {
          NewFilterValue(e.target.value);handleFilter(listItems);console.log('filterListJs');
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
