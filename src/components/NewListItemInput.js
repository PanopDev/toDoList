import { HiPlusCircle } from "react-icons/hi";

function NewItemInput({
  listItems,
  itemInput,
  setItemInput,
  setAndSaveStates,
  handleSort,
  listItemsNew,
  sortSelected,
  selectAllBoxRef,
  selectAllLIRef,
  hideShowSelectAll
}) {
  function handleSubmit(submit) {
    submit.preventDefault();
    handleNewObj(listItems);
    selectAllBoxRef.current.checked = false
    setItemInput("");
  }

  function handleNewObj(listItems) {
    const listItemsSort = [...listItems].sort((b, a) => a.id - b.id);
    const id = listItems.length ? listItemsSort[0].id + 1 : 1;
    const newItemObject = { id: id, item: itemInput, checked: false };
    const myList = [...listItems, newItemObject];
    setAndSaveStates(myList);

  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        required
        type="text"
        className="newItemInput"
        placeholder="Add Something or Search"
        value={itemInput}
        onChange={(input) => {
          setItemInput(input.target.value);
          listItemsNew(listItems);
          // hideShowSelectAll();

        }}
      />
      <button type="submit" className="transparentButton">
        <HiPlusCircle className="addItemLogo" />
      </button>
    </form>
  );
}
export default NewItemInput;

