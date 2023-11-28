import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {

  const renderListings = listings.map(item => 
    <ListingCard
    item={item}
    key={item.id} 
    handleDelete={handleDelete} 
    />)

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;

// ? Self code
// import React from "react";
// import ListingCard from "./ListingCard"

// function ListingsContainer({items, onDelete}) {

//   const renderItems = items.map(item => 
//     <ListingCard
//       item={item}
//       key={item.id}
//       onDelete={onDelete} />)

//   return (
//     <main>
//       <ul className="cards">
//         {renderItems}
//       </ul>
//     </main>
//   );
// }

//  export default ListingsContainer;

