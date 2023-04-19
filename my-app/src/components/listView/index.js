import ShopItem from "../shopItem";
import styles from "./index.module.css";

function ListView({ items }) {
  return (
    <div className={styles.products}>
      {items.map((item) => (
        <ShopItem card={item} key={item.name + " " + item.color} />
      ))}
    </div>
  );
}

export default ListView;
