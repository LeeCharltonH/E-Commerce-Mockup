import styles from './categorypage.module.scss';
import ProductCard from '../products/productCard';

const CategoryPage = props => {
    const category = props.data.filter(item => item.category === props.category);
    
  let products = category.map((item) => {
    return (
      <div key={item.id}>
        <ProductCard data={item} />
      </div>
    );
  });

  return (
    <main className={styles.categoryContainer}>
      <h2>{props.h2}</h2>
      <div className={styles.productContainer}>{props.data.length < 1 ? "Is Loading" : products}</div>
    </main>
  );
}

export default CategoryPage;