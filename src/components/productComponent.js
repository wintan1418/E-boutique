import React from "react";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products  = useSelector((state) => state);
  const {id, title } = product;
  return (
  <div className="four column wide">
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <div className="content">
            <div className="header">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
     
  
};
 export default ProductComponents;