import styles from "./index.module.css";

function ShopItem({ card }) {
  return (
    <div className={styles["products-item"]}>
      <div className={styles["products-item-img"]}>
        <img src={card.img} alt={card.name + " " + card.color} />
      </div>
      <span className={styles["products-item-title"]}>{card.name}</span>
      <span className={styles["products-item-color"]}>{card.color}</span>
      <span className={styles["products-item-price"]}>${card.price}</span>
      <button className={styles["products-item-add-cart"]}>Add to cart</button>
    </div>
  );
}

export default ShopItem;
