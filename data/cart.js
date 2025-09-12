export const cart = [];
export function addToCart(productId) {
    let matchingItem; //will store the cart item if it already exists

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }

    });


    if (matchingItem) {
          matchingItem.quantity += 1;
        } else {
            cart.push({
            productId: productId,
            quantity : 1
      });
    }
}
