import React from "react";
import "./CollectionItem.style.scss";
import CustomButton from "../custombutton/CustomButton";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
