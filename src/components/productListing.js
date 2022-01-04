import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponents from "./productComponent";

const ProductListing = () => {

  const products  = useSelector((state) => state);
  const dispatch  = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products/1")
    .catch((err) => {
      console.log("Err", err);

    });
    dispatch(setProducts(response.data));
  };
  useEffect (() =>{
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
  <div className="ui grid container">
    <ProductComponents/>
  </div>
  );
    
  
};
 export default ProductListing;