import { Carousel } from "react-responsive-carousel";
import { Button } from "./button";
import styles from "./featured.module.scss";

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

  return (
    <Carousel autoPlay showArrows={true} showThumbs={false} showStatus={false}>
      <div className={styles.carouselCard}>
        <div>
          <div>
            <img src={featured()[0].image} />
          </div>
          <h3>{featured()[0].title} </h3>
          <Button>Add To Cart</Button>
        </div>
      </div>
      <div className={styles.carouselCard}>
        <div>
          <div>
            <img src={featured()[1].image} />
          </div>
          <h3>{featured()[1].title} </h3>
          <Button>Add To Cart</Button>
        </div>
      </div>
      <div className={styles.carouselCard}>
        <div>
          <div>
            <img src={featured()[2].image} />
          </div>
          <h3>{featured()[2].title} </h3>
          <Button>Add To Cart</Button>
        </div>
      </div>
      <div className={styles.carouselCard}>
        <div>  
          <div>
            <img src={featured()[3].image} />
          </div>
          <h3>{featured()[3].title} </h3>
          <Button>Add To Cart</Button>
        </div>
      </div>
    </Carousel>
  );
};
