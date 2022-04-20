import styles from "./productSlider.module.scss";
import ProductCard from "./productCard";

const ProductSlider = (props) => {
    const category = props.data.filter(item => item.category === props.category);
    
  let products = category.map((item) => {
    return (
      <div key={item.id}>
        <ProductCard data={item} />
      </div>
    );
  });

  return (
    <section className={styles.sliderContainer}>
      <h2>{props.h2}</h2>
      <div className={styles.sliderProducts}>{props.data.length < 1 ? "Is Loading" : products}</div>
    </section>
  );
};

export default ProductSlider;
