import "./App.scss";
import React, { useEffect, useState } from "react";
import ProductSlider from "./components/products/productSlider";
import Nav from "./components/layout/nav";
import Modal from "./components/UI/modal/modal";
import Header from "./components/layout/header";
import Homepage from "./components/pages/homepages";

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
        const arr = json.map((item) => {
          return { ...item, quantity: 1 };
        });
        setData(arr);
      });
  }, []);


  return (
    <React.Fragment>
      <div className="App">
      <Header modal={modalHandler} data={data}/>
      <Homepage data={data} />
      </div>
      {modal && <Modal modal={modalHandler} />}
    </React.Fragment>
  );
}

export default App;
