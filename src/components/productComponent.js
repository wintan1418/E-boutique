import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponents = () => {
 
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((products) => {
    const { id, title, image, price, category } = products;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/products/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
 export default ProductComponents;