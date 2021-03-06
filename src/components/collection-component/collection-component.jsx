import React from "react";
import "./collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";

const CollectionPreview = ({ title, items }) => {
  console.log({ title }, { items });

  return (
    <>
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, indx) => indx < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CollectionPreview;
