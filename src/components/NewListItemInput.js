import {useState} from 'react'
import {HiPlusCircle} from "react-icons/hi";



function NewItemInput({ listItems, listItemsNew }) {
    
    const [itemInput, setItemInput] = useState('')

    function handleSubmit(submit) {
        submit.preventDefault(); handleNewObj(listItems); setItemInput('');
    }

    function handleNewObj(listItems) {
        const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1
        const newItemObject = { id: id, item: itemInput, checked: false }
        const myItems = [...listItems, newItemObject]
        listItemsNew(myItems)
    }


return(
    <form
    onSubmit={handleSubmit}
    >
        <input 
        autoFocus
        required
        type = 'text'
        className= 'newItemInput'
        placeholder= 'Add Something here'
        value={itemInput}
        onChange={(input)=>{setItemInput(input.target.value)}}
        

        />
        <button
        type='submit'
        className= 'addItemButton'
        ><HiPlusCircle 
        className='addItemLogo'
        /></button>
    </form>

    
    
    )



}

export default NewItemInput