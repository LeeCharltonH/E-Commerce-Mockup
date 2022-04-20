import { Card } from "../UI/card";
import { Badge } from "../UI/badge";
import { Button } from "../UI/button";
import styles from "./productCard.module.scss";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(basketActions.addItem({ item: props.data}));
  };

  return (
    <Card>
      <img src={props.data.image} className={styles.img} />
      <div>{props.data.title}</div>
      <div>
        <Badge pill className="mb-1" bg="warning">
          £{props.data.price}
        </Badge>
      </div>

      <Button onClick={addToBasket}>Add To Cart</Button>
    </Card>
  );
};

export default ProductCard;
