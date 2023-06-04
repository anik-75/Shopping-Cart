import React from "react";
import styles from "./Homepage.module.css";
import Item from "./Item";
import Nav from "./Nav";
function Homepage() {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book I ever wrote",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book I ever wrote",
    },
  ];

  return (
    <React.Fragment>
      <Nav />
      {/* 1Row */}
      <div className={styles.collection_container}>
        <div className={styles.accessories_container}>
          {DUMMY_PRODUCTS.map((product) => {
            return (
              <Item
                key={product.id}
                id={product.id}
                price={product.price}
                title={product.title}
              />
            );
          })}
        </div>

        {/* 2nd  */}
        {/* <div className={styles.categories_container}>
          <div></div>
          <div></div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

export default Homepage;
