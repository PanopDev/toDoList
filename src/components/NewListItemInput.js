
import { HiPlusCircle } from "react-icons/hi";



function NewItemInput({ listItems, listItemsNew, itemInput, setItemInput }) {

    function handleSubmit(submit) {
        submit.preventDefault(); handleNewObj(listItems); setItemInput('');
    }

    function handleNewObj(listItems) {
        const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1
        const newItemObject = { id: id, item: itemInput, checked: false }
        const myList = [...listItems, newItemObject]
        listItemsNew(myList)
        localStorage.setItem('listItems', JSON.stringify(myList))
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                autoFocus
                required

                type='text'
                className='newItemInput'
                placeholder='Add Something or Search'
                value={itemInput}
                onChange={(input) => { setItemInput(input.target.value) }}

            />
            <button
                type='submit'
                className='transparentButton'
            ><HiPlusCircle
                    className='addItemLogo'
                /></button>
        </form>
    )
}
export default NewItemInput