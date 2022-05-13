import { Link } from "react-router-dom";
import styles from "./categoryHighlights.module.scss";
import ProductCard from "./productCard";


const CategoryHighlights = (props) => {
  const category = props.data.filter(
    (item) => item.category === props.category
  );

  let products = category.map((item, index) => {
    const itemIndex = index;
    if (itemIndex < 3) {
      return (
          <ProductCard key={Math.random()} className={styles.productItem} data={item}/>
      );
    }
    return [];
  });

  const url = props.category.replace("'", "").replace(" ", "-");

  return (
    <section className={styles.categoryHighlights}>
      <h2>{props.h2}</h2>
      <div className={styles.productContainer}>
        {props.data.length < 1 ? "Is Loading" : products}
      </div>
      <Link to={`/${url}`}><button className={styles.viewMoreBtn}>View More</button></Link>
      
    </section>
  );
};

export default CategoryHighlights;
