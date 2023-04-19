import ShopCard from "../shopCard";
import styles from "./index.module.css";

function CardsView({ cards }) {
  return (
    <div className={styles.products}>
      {cards.map((item) => (
        <ShopCard card={item} key={item.name + " " + item.color} />
      ))}
    </div>
  );
}

export default CardsView;
