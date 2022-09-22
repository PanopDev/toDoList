import ListItem from "./ListItem";
import { FiDelete } from "react-icons/fi"

function ListBody({ listItems, listItemsNew, itemInput }) {



  function handleChecked(id) {
    const myList = listItems.map((li) => id == li.id ? { ...li, checked: !li.checked } : li)
    listItemsNew(myList)
    localStorage.setItem('listItems', JSON.stringify(myList))
  }
  function handleDelete(id) {
    const myList = listItems.filter((item) => item.id !== id)
    listItemsNew(myList)
    localStorage.setItem('listItems', JSON.stringify(myList))



  }
  let listFilter = listItems.filter((a) => a.item.includes(itemInput));

  return (
    <div>
      <ul>
        {listItems.length ? (listFilter.map((li) =>

          <li key={li.id}>
            <input
              type='checkbox'
              checked={li.checked}
              onChange={() => handleChecked(li.id)}

            />
            <label
              style={(li.checked) ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleChecked(li.id)}
              className='listItemLabel'
            >{li.item}</label>
            <button
              className='transparentButton'
              onClick={() => handleDelete(li.id)}

            ><FiDelete className="deleteLogo" /></button>
          </li>


        )

        ) : (<h1> Nothing here! <br /> Add more or take a nap! </h1>)}




      </ul>
    </div>
  );
}

export default ListBody;
