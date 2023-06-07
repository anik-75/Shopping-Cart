import React from "react";
import styles from "./Homepage.module.css";
import Item from "./Item";
import Nav from "./Nav";
import { useState, useEffect } from "react";
function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchedProducts = async () => {
      try {
        let response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Could not fetch Products");
        }
        const products = await response.json();
        setProducts(products);
      } catch (err) {
        return err;
      }
    };
    fetchedProducts();
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <div className={styles.collection_container}>
        <div className={styles.accessories_container}>
          {products.map((product) => {
            return (
              <Item
                image={product.image}
                key={product.id}
                id={product.id}
                price={product.price}
                title={product.title}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
