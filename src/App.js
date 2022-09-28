import "./App.css";
import ListBody from "./components/ListBody";
import HeaderContent from "./components/HeaderContent";
import NewListItemInput from "./components/NewListItemInput.js";
import { useState, useRef, useEffect } from "react";
import SortList from "./components/SortList.js";
import FilterList from "./components/FilterList.js";
import DeleteCompleted from "./components/DeleteCompleted";
import SelectAll from "./components/SelectAll";
import ItemsStats from "./components/ItemsStats";

function App() {

  const initialListItemsState = JSON.parse(localStorage.getItem("listItems")) || [];
  const [listItems, listItemsNew] = useState(initialListItemsState);
  const [itemInput, setItemInput] = useState("");
  const [listFilter, listFilterSet] = useState(listItems.filter((a) => a.item.includes(itemInput)));
  const [sortSelect, sortSelected] = useState("Newest");
  const filterRef = useRef();
  const sortRef = useRef();
  const selectAllBoxRef = useRef();
  const selectAllLIRef = useRef();
  let completed = listItems.filter((item) => item.checked)
  let incomplete = listItems.filter((item) => !item.checked)
  let totalItems = listItems.length
  useEffect(() => handleFilter(listItems), [itemInput]);
  useEffect(() => handleSort(), [sortSelect, listItems]);
  useEffect(() => handleStats(), [listItems]);
  useEffect(() => hideShowSelectAll(), [itemInput])



  // ^^added  this list items to this recently if there is a bug
  //~~~~~~~~~~~~~~~Testing logs for debugging
  // useEffect(() => console.log('list Items changed'), [listItems])
  // useEffect(() => console.log(listItems), [listItems])
  // useEffect(() => console.log('itemInput changed'), [itemInput])
  // useEffect(() => console.log(itemInput), [itemInput])
  // useEffect(() => console.log('list Filter changed'), [listFilter])
  // useEffect(() => console.log(listFilter), [listFilter])
  // useEffect(() => console.log(sortSelect), [sortSelect])

  function hideShowSelectAll() {
    if (itemInput !== '') {
      selectAllLIRef.current.style.display = 'none'
    }
    else if (itemInput == '') { selectAllLIRef.current.style.display = 'flex' }
  }

  function selectAll(checked) {
    if (checked) {
      const myList = listItems.map((item) => (!item.checked ? { ...item, checked: true } : item));
      setAndSaveStates(myList);
    } else if (!checked) {
      const myList = listItems.map((item) => (item.checked == true ? { ...item, checked: false } : item));
      setAndSaveStates(myList);
    }
  }

  function deleteAll() {
    const myList = listItems.filter((a) => a.checked == false);
    const deleted = listItems.filter((a) => a.checked == true);
    localStorage.setItem("lastDeleteAll", JSON.stringify(deleted));
    localStorage.setItem("listItems", JSON.stringify(myList));
    handleFilter(myList);
    setAndSaveStates(myList);
  }
  function undoDeleteAll() {
    const undone = JSON.parse(localStorage.getItem("lastDeleteAll"));
    if (undone === []) { console.log('empty array') }
    const newList = [...undone, ...listItems];
    setAndSaveStates(newList);
    localStorage.setItem("lastDeleteAll", JSON.stringify([]));
  }

  function handleSort() {
    if (sortRef.current.value == "Alphabetic") {
      const sortAlpha = listItems.sort((a, b) => {
        const aCased = a.item.toUpperCase();
        const bCased = b.item.toUpperCase();
        if (aCased < bCased) {
          return -1;
        }
        if (aCased > bCased) {
          return 1;
        }
        if (aCased == bCased) {
          return 0;
        }
      });
      setAndSaveStates(sortAlpha);
    }

    if (sortRef.current.value == "Newest") {
      const sortNewest = listItems.sort((a, b) => b.id - a.id);
      setAndSaveStates(sortNewest);
    }
    if (sortRef.current.value == "Oldest") {
      const sortNewest = listItems.sort((b, a) => b.id - a.id);
      setAndSaveStates(sortNewest);
    }
  }

  function handleFilter(listItems) {
    if (filterRef.current.value === "Incomplete") {
      listFilterSet(
        listItems.filter((a) => {
          if (a.item.toLowerCase().includes(itemInput) && a.checked === false) {
            return {};
          }
        })
      );
    } else if (filterRef.current.value === "Completed") {
      listFilterSet(
        listItems.filter((a) => {
          if (a.item.toLowerCase().includes(itemInput) && a.checked === true) {
            return {};
          }
        })
      );
    } else if (filterRef.current.value === "All Items") {
      listFilterSet(listItems.filter((a) => a.item.toLowerCase().includes(itemInput.toLowerCase())));
    }
  }

  function setAndSaveStates(myList, callBack) {
    listItemsNew(myList);
    localStorage.setItem("listItems", JSON.stringify(myList));
    handleFilter(myList);

    if (typeof callBack == "function") {
      callBack();
    }
  }

  function handleChecked(id) {
    const myList = listItems.map((li) => (id == li.id ? { ...li, checked: !li.checked } : li));
    setAndSaveStates(myList);
    selectAllBoxRef.current.checked = false;
  }
  function handleDelete(id) {
    const myList = listItems.filter((item) => item.id !== id);
    setAndSaveStates(myList);
  }

  function handleStats() {
    completed = listItems.filter((item) => item.checked == true)
    incomplete = listItems.filter((item) => item.checked == false)
    totalItems = listItems.length
  }

  //   // Initial function calls
  // handleSort()

  return (
    <div className="App">
      {useEffect(() => handleSort, [])}
      <HeaderContent />
      <NewListItemInput
        listItems={listItems}
        itemInput={itemInput}
        setItemInput={setItemInput}
        setAndSaveStates={setAndSaveStates}
        handleFilter={handleFilter}
        listItemsNew={listItemsNew}
        handleSort={handleSort}
        sortSelected={sortSelected}
        selectAllBoxRef={selectAllBoxRef}
        selectAllLIRef={selectAllLIRef}
        hideShowSelectAll={hideShowSelectAll}
      />
      <div className="settingsAndItems">
        <div className="settings">
          <div className='filterAndSortDiv'>
            <FilterList listItems={listItems} filterRef={filterRef} handleFilter={handleFilter} />
            <SortList sortRef={sortRef} sortSelect={sortSelect} sortSelected={sortSelected} handleSort={handleSort} />
          </div>

          <div className='filterAndSortDiv'>
            <DeleteCompleted deleteAll={deleteAll} buttonText={"Delete All Checked"} buttonFunction={deleteAll} />
            <DeleteCompleted deleteAll={deleteAll} buttonText={"Undo"} buttonFunction={undoDeleteAll} />
          </div>
        </div>

        <div className='listItems'>
          <SelectAll selectAll={selectAll} selectAllBoxRef={selectAllBoxRef}
            completed={completed}
            incomplete={incomplete}
            totalItems={totalItems}
            selectAllLIRef={selectAllLIRef}
          />

          <ListBody
            listItems={listItems}
            listFilter={listFilter}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
