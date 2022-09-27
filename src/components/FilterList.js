import { useState } from "react";

function FilterList({ filterRef, handleFilter, listItems }) {
  const [filterValue, NewFilterValue] = useState("All Items");

  return (
    <>
      <label htmlFor="filterList">Filter by </label>
      <select
        id="filterList"
        className="filterSortDropdown"
        ref={filterRef}
        value={filterValue}
        onChange={(e) => {
          NewFilterValue(e.target.value);
          handleFilter(listItems);
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
