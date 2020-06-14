import React from "react";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Slider from "../../components/Slider";

import "bootstrap/dist/css/bootstrap.min.css";

//import PizzaList from "../../components/PizzaList/PizzaList"; раскоментировать для подключения реального PizzaList
// import PizzaListForTest from "../../components/PizzaList/PizzaListForTest";
// import PizzaListItem from "../../components/PizzaListItem/PizzaListItem";
// import { Switch, Route } from 'react-router-dom';
// import { routes } from '../../servises/routes';
// import styles from './MainPage.module.css';
// import products from "../../services/products.json";

function MainPage() {
  return (
    <>
      <Slider />
      <ProductContainer>
        {/* <PizzaList />  раскоментировать для подключения реального PizzaList */}
        {/* <PizzaListForTest /> */}
        {/* Using test product object from products.json for testing purposes  */}
      </ProductContainer>
    </>
  );
}

export default MainPage;
