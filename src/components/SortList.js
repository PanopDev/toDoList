import { useState } from "react";

function SortList() {
    const [sortSelect, sortSelected] = useState("Newest");

    return (
        <>
            <label htmlFor="sortList"> Sort by </label>
            <select
                id="sortList"
                name="sortList"
                value={sortSelect}
                onChange={(e) => {
                    sortSelected(e.target.value);
                    console.log(e.target.value);
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
