import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  function onDelete(selectedItem) {
    const filteredItems = items.filter(item => 
      item.id !== selectedItem
    )
    setItems(filteredItems)
  }

  const displayedItems = items.filter(item => 
    item.description.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer items={displayedItems} onDelete={onDelete} />
    </div>
  );
}

export default App;
