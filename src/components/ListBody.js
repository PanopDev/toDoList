import ListItem from "./ListItem";


function ListBody({listItems,listItemsNew}) {

    
const handleChecked = (id)=>{

const myList = listItems.map((li)=>id == li.id ? {...li, checked:!li.checked} : li)
listItemsNew(myList)

}
  return (
    <div>
        <ul>
       {listItems.map((li)=>
       
        <li key={li.id}>
        <input
         type='checkbox'
         checked={li.checked}
         onChange={()=>handleChecked(li.id)}
         
         />
        <label
        style={(li.checked) ? {textDecoration:'line-through'} : null}
        onDoubleClick={() =>handleChecked(li.id)}
        >{li.item}</label>
        <button>X</button>
        </li>
       
       
       )
       
       }
       
       
      </ul>
      </div>
  );
}

export default ListBody;
