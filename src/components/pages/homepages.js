import React from "react";
import CategoryHighlights from "../products/categoryHighlights";
import { Featured } from "../UI/featured";

const Homepage = (props) => {
  const data = props.data;

  const categories = data.reduce((cats, item) => {
    if (cats.indexOf(item.category) > -1) {
      return [...cats];
    } else {
      return [item.category, ...cats];
    }
  }, []);

  let categoryHighlights = categories.map((item) => {
    return (
      <CategoryHighlights
        data={data}
        h2={item}
        category={item}
        key={Math.random()}
      />
    );
  });

  return (
    <React.Fragment>
      {data.length > 0 && <Featured data={data} categories={categories} />}
      {categoryHighlights}
    </React.Fragment>
  );
};

export default Homepage;
