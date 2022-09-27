import { sortRef } from "react";

function SortList({ sortSelect, sortSelected, handleSort, sortRef }) {
  return (
    <>
      <label htmlFor="sortList"> Sort by </label>
      <select
        id="sortList"
        className="filterSortDropdown"
        name="sortList"
        ref={sortRef}
        value={sortSelect}
        onChange={(e) => {
          sortSelected(e.target.value);
        }}
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>Alphabetic</option>
      </select>
    </>
  );
}
export default SortList;
