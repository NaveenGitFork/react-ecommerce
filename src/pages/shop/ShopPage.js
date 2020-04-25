import React from "react";
import ShopData from "./ShopData";
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
