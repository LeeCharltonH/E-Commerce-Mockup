import "./App.scss";
import React, { useEffect, useState } from "react";
import ProductSlider from "./components/products/productSlider";
import Nav from "./components/layout/nav";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const categories = data.reduce((cats, item) => {
    if (cats.indexOf(item.category) > -1) {
      return [...cats];
    } else {
      return [item.category, ...cats];
    }
  }, []);
  console.log("reduced categories: ", categories);

  let productCategories = categories.map((item) => {
    return <ProductSlider data={data} h2={item} category={item} />;
  });

  return (
    <React.Fragment>
      <Nav />
      <div className="App">
        <h1>Ecommerce Demo</h1>
        {productCategories}
      </div>
    </React.Fragment>
  );
}

export default App;
