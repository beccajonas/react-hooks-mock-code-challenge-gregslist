import React from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({items, onDelete}) {

  const renderItems = items.map(item => 
    <ListingCard
      item={item}
      key={item.id}
      onDelete={onDelete} />)

  return (
    <main>
      <ul className="cards">
        {renderItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
