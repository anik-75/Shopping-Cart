import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import styles from "./CheckoutPage.module.css";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import CheckoutItem from "./CheckoutItem";
function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(cartItems);
  return (
    <React.Fragment>
      <Nav />
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
              console.log(item);
              return (
                <CheckoutItem
                  quantity={item.quantity}
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  title={item.name}
                />
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th isNumeric>${cartTotalPrice}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

export default CheckoutPage;
