import { cartActions } from "./cartSlice";

export const fetchCartData = (uid) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_FIREBASE_URL_CART}/users/${uid}.json`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      if (uid) {
        const cartData = await fetchData();
        cartData.items.map((item) => {
          dispatch(cartActions.addItemFromDB(item));
        });
      }
    } catch (error) {
      return error.message;
    }
  };
};

export const sendCartData = (cart, uid) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_FIREBASE_URL_CART}/users/${uid}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      if (uid) {
        await sendRequest();
      }
    } catch (error) {
      return error.message;
    }
  };
};
