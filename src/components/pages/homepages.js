import React from "react";
import ProductSlider from "../products/productSlider";

const Homepage = (props) => {
  const data = props.data;

  const categories = data.reduce((cats, item) => {
    if (cats.indexOf(item.category) > -1) {
      return [...cats];
    } else {
      return [item.category, ...cats];
    }
  }, []);

  let productCategories = categories.map((item) => {
    return (
      <ProductSlider
        data={data}
        h2={item}
        category={item}
        key={Math.random()}
      />
    );
  });
  return <React.Fragment>{productCategories}</React.Fragment>
};

export default Homepage;
