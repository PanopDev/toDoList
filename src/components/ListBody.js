import { FiDelete } from "react-icons/fi";

function ListBody({ listItems, listFilter, handleChecked, handleDelete }) {
  return (
    <div>
      <ul>
        {listItems.length ? (
          listFilter.map((li) => (
            <li key={li.id}>
              <input type="checkbox" checked={li.checked} onChange={() => handleChecked(li.id)} />
              <label
                style={li.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChecked(li.id)}
                className="listItemLabel"
              >
                {li.item}
              </label>
              <button className="transparentButton" onClick={() => handleDelete(li.id)}>
                <FiDelete className="deleteLogo" />
              </button>
            </li>
          ))
        ) : (
          <h1>
            {" "}
            Nothing here! <br /> Add more or take a nap!{" "}
          </h1>
        )}
      </ul>
    </div>
  );
}

export default ListBody;
