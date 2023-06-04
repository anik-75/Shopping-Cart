import React from "react";
import { Tr, Td } from "@chakra-ui/react";

import styles from "./CheckoutPage.module.css";

import { cartActions } from "../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
function CheckoutItem({ id, title, price, quantity }) {
  const cartDispatch = useDispatch();
  const removeItemHandler = () => {
    cartDispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    cartDispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  const removeAllItemHandler = () => {
    cartDispatch(cartActions.removeAllItemsFromCart(id));
  };
  return (
    <React.Fragment>
      <Tr>
        <Td>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
        </Td>
        <Td>{title}</Td>
        <Td>
          <button onClick={removeItemHandler}>
            <FontAwesomeIcon icon={faMinus} size="2xs" />
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button onClick={addItemHandler}>
            <FontAwesomeIcon icon={faPlus} size="2xs" />
          </button>
        </Td>
        <Td className={styles.price}>${price} /item</Td>
        <Td>
          <button onClick={removeAllItemHandler}>
            <FontAwesomeIcon
              className={styles.remove}
              icon={faCircleXmark}
              style={{ color: "#cf0725" }}
              size="lg"
            />
          </button>
        </Td>
      </Tr>
    </React.Fragment>
  );
}

export default CheckoutItem;
