exports.Query = {
  products: (parent, { filter }, { products }) =>
    filter && filter.onSale
      ? products.filter(product => product.onSale)
      : products,
  product: (parent, { id }, { products }) =>
    products.find(product => product.id === id),

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find(category => category.id === id),
};
