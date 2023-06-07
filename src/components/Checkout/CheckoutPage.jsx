import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import styles from "./CheckoutPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <React.Fragment>
      <Nav />
      {cartItems.length === 0 ? (
        <FontAwesomeIcon
          className={styles.emptyCart}
          icon={faBasketShopping}
          size="2xl"
          styl
        />
      ) : (
        <TableContainer className={styles.checkout_container}>
          <Table variant="simple">
            <Thead className={styles.checkout_header}>
              <Tr>
                <Th>Product</Th>
                <Th>Description</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((item) => {
                return (
                  <CheckoutItem
                    quantity={item.quantity}
                    image={item.image}
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    title={item.name}
                  />
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr style={{ textAlign: "end" }}>
                <Td
                  style={{ textAlign: "end" }}
                  className={styles.total}
                  colSpan="4"
                >
                  Total
                </Td>
                <Td>${cartTotalPrice.toFixed(2)}</Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
}

export default CheckoutPage;
