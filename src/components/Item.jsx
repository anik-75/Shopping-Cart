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
function Item({ id, price, title, image }) {
  const cartDispatch = useDispatch();
  const addToCartHandler = () => {
    cartDispatch(
      cartActions.addItemToCart({
        id,
        image,
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
            src={image}
            alt={title}
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
