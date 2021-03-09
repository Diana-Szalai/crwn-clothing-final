import React, { useState } from "react";
import { getShopData } from "../../helpers/shopData";
import CollectionPreview from "../../components/collection-component/collection-component.jsx";
import "./shop.style.scss";

const ShopPage = () => {
  const [collections] = useState(() => getShopData());
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
