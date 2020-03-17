export const getCartSubtotal = (cartItems) => {
  cartItems.reduce((result, cartItem) => cartItem.subtotal + result, 0);
};
