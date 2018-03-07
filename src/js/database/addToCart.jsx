export const addProductToCart = (product) => {
  return {
    type: 'ADD_PRODUCT',
    products: product
  }
};