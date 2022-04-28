import { Carousel } from "react-responsive-carousel";
import ProductCard from "../products/productCard";
import styles from './featured.module.scss';

export const Featured = (props) => {
  const data = props.data;
  const categories = props.categories;

  const featured = () => {
    const feature1 = data.filter((item) => item.category === categories[0]);
    const feature2 = data.filter((item) => item.category === categories[1]);
    const feature3 = data.filter((item) => item.category === categories[2]);
    const feature4 = data.filter((item) => item.category === categories[3]);

    const item1 = feature1[0];
    const item2 = feature2[0];
    const item3 = feature3[0];
    const item4 = feature4[0];

    return [item1, item2, item3, item4];
  };

  const test = data[0].image;

  console.log(test)

  return (
    <Carousel autoPlay showArrows={true} showThumbs={false} showStatus={false}>
      <div className={styles.carouselCard}>
        <ProductCard data={featured()[0]} />
      </div>
      <div className={styles.carouselCard}>
        <ProductCard data={featured()[1]} />
      </div>
      <div className={styles.carouselCard}>
        <ProductCard data={featured()[2]} />
      </div>
      <div className={styles.carouselCard}>
        <ProductCard data={featured()[3]} />
      </div>
    </Carousel>
  );
};
