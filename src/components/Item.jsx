import React from "react";
import styles from "./Item.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";
function Item({ id, price, title }) {
  const cartDispatch = useDispatch();
  const addToCartHandler = () => {
    cartDispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <React.Fragment>
      <Card className={styles.item_card}>
        <CardBody>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link
              className={styles.buy_btn}
              to="/checkout"
              onClick={addToCartHandler}
            >
              <span>Buy Now</span>
            </Link>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={addToCartHandler}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
}

export default Item;
