import { useRef } from "react";
import ItemsStats from "./ItemsStats";

export default function SelectAll({
  selectAll,
  selectAllBoxRef,
  completed,
  incomplete,
  totalItems,
  selectAllLIRef }) {



  return (
    <>
      <ul>
        <li className="stats"><ItemsStats
          completed={completed}
          incomplete={incomplete}
          totalItems={totalItems}
        />  </li>
        <li ref={selectAllLIRef}>

          <input type='checkbox'
            className="checkbox"
            ref={selectAllBoxRef}
            onChange={(e) => { selectAll(e.target.checked); }}

          ></input>
          <label className='listItemLabel' id='selectAllCheckBox'>Select All  </label>

        </li>
      </ul>

    </>
  )
}
