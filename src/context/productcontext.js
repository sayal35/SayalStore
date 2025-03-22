//create a context
//provider
//consumer=>useContext hook

import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "http://localhost:8080/api/v1/product/getallproducts";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(API);

      const products = await res.data.products;

      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: "API_ERROR" });
    }
  };

  //singleproduct api call
  const getSingleProduct = async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/product/getproductbyid/${id}`
      );

      if (res.data && res.data.product) {
        dispatch({ type: "SET_SINGLE_PRODUCT", payload: res.data.product });
      } else {
        dispatch({ type: "SET_SINGLE_ERROR" });
      }
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getProducts, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};
//custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
