import "./App.scss";
import React, { useEffect, useState } from "react";
import ProductSlider from "./components/products/productSlider";
import Nav from "./components/layout/nav";
import Modal from "./components/UI/modal/modal";

function App() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

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
      <Nav modal={modalHandler} />
      <div className="App">
        <h1>Ecommerce Demo</h1>
        {productCategories}
      </div>
      {modal && <Modal modal={modalHandler} />}
    </React.Fragment>
  );
}

export default App;
