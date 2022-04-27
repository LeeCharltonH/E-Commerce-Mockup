import "./App.scss";
import React, { useEffect, useState } from "react";
import Modal from "./components/UI/modal/modal";
import Header from "./components/layout/header";
import Homepage from "./components/pages/homepages";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./components/pages/categorypage";

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

  const categories = data.reduce((cats, item) => {
    if (cats.indexOf(item.category) > -1) {
      return [...cats];
    } else {
      return [item.category, ...cats];
    }
  }, []);

  const categoryPages = categories.map((item) => {
    const url = item.replace("'", "").replace(" ", "-");
    return (
      <Route
        key={categories.indexOf(item)}
        exact
        path={`/${url}`}
        element={<CategoryPage h2={item} category={item} data={data} />}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="App">
        <Header modal={modalHandler} data={data} />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Homepage data={data} />} />
            {categoryPages}
          </Routes>
        </main>
      </div>
      {modal && <Modal modal={modalHandler} />}
    </React.Fragment>
  );
}

export default App;
