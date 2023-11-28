import React, {useState} from "react";

function ListingCard({ item, onDelete }) {
  const {description, image, location} = item

  const [like, setLike] = useState(false)

  function handleLike() {
    setLike(!like)
  }

  function handleDelete() {
    onDelete(item.id)
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method : 'DELETE',
      headers: {
        "content-type" : 'application/json'
      }
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
