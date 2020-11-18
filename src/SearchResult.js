import React, { useState } from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      {liked ? (
        <Favorite
          className="searchResult__heart"
          fontSize="large"
          onClick={(e) => setLiked(false)}
        />
      ) : (
        <FavoriteBorder
          className="searchResult__heart--red"
          fontSize="large"
          onClick={(e) => setLiked(true)}
        />
      )}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
