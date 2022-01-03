import React, {useEffect} from "react";
import axios, { Axios } from "axios";
import { useSelector } from "react-redux";
import ProductComponents from "./productComponent";

const ProductListing = () => {

  const products  = useSelector((state) => state);
  const fetchProducts = async () => {
    const response = await axios
    .get("apikeyproducts")
    .catch((arr) => {
      console.log("Err", err);

    });
    console.log(response);
  };
  useEffect (() =>{
    fetchProducts();
  }, []);
  console.log(products);
  return (
  <div className="ui grid container">
    <ProductComponents/>
  </div>
  );
    
  
};
 export default ProductListing;