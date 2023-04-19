import React, { useState } from "react";
import IconSwitch from "../iconSwitch";
import CardsView from "../cardsView";
import ListView from "../listView";
import products from "../../data/products";
import "./index.css";

function Store() {
  const [view, setView] = useState("view_list");

  const handleSwitch = (view) => {
    view === "view_list" ? setView("view_module") : setView("view_list");
  };

  return (
    <div className="container">
      <IconSwitch icon={view} onSwitch={handleSwitch} />
      {view === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}

export default Store;
