exports.Category = {
  products: ({ id }, args, { products }) =>
    products.filter(product => product.categoryId === id),
};
