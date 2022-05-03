import { Card } from "../UI/card";
import { Badge } from "../UI/badge";
import { Button } from "../UI/button";
import styles from "./productCard.module.scss";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const price = props.data.price;

  const addToBasket = () => {
    dispatch(basketActions.addItem({ item: props.data }));
  };

  return (
    <Card className={props.className}>
      <div className={styles.imgContainer}>
        <img src={props.data.image} className={styles.img} alt={props.data.title} />
      </div>
      <div>{props.data.title}</div>
      <div>
        <Badge>£{price.toFixed(2)}</Badge>
      </div>

      <Button onClick={addToBasket}>Add To Cart</Button>
    </Card>
  );
};

export default ProductCard;
