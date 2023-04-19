import styles from "./index.module.css";

function ShopCard({ card }) {
  return (
    <div className={styles["products-item"]}>
      <div className={styles["products-item-content"]}>
        <img src={card.img} alt={card.name + " " + card.color} />
        <div className={styles["products-item-text"]}>
          <span className={styles["products-item-text-title"]}>
            {card.name}
          </span>
          <span className={styles["products-item-text-color"]}>
            {card.color}
          </span>
          <div className={styles["products-item-text-bottom"]}>
            <span className={styles["products-item-text-bottom-price"]}>
              ${card.price}
            </span>
            <button className={styles["products-item-text-bottom-add-cart"]}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
