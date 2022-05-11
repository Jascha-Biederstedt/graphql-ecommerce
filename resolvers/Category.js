exports.Category = {
  products: ({ id }, { filter }, { products }) =>
    filter && filter.onSale
      ? products.filter(product => product.categoryId === id && product.onSale)
      : products.filter(product => product.categoryId === id),
};
