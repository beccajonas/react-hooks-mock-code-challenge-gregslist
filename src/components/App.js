import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  const filteredItems = listings.filter(item => 
    item.description.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      const filteredList = listings.filter(item => 
        item.id !== id)
      setListings(filteredList)
    })
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer handleDelete={handleDelete} listings={filteredItems} />
    </div>
  );
}

export default App;

// ? Self code 
// import React, {useEffect, useState} from "react";
// import Header from "./Header";
// import ListingsContainer from "./ListingsContainer";

// function App() {

//   const [items, setItems] = useState([])
//   const [search, setSearch] = useState("")

//   useEffect(() => {
//     fetch('http://localhost:6001/listings')
//     .then(res => res.json())
//     .then(data => setItems(data))
//   }, [])

//   function onDelete(selectedItem) {
//     const filteredItems = items.filter(item => 
//       item.id !== selectedItem
//     )
//     setItems(filteredItems)
//   }

//   const displayedItems = items.filter(item => 
//     item.description.toLowerCase().includes(search.toLowerCase())
//   );
  

//   return (
//     <div className="app">
//       <Header onSearch={setSearch} />
//       <ListingsContainer items={displayedItems} onDelete={onDelete} />
//     </div>
//   );
// }

// export default App;
