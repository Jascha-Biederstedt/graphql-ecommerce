exports.Query = {
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) =>
    products.find(product => product.id === id),

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find(category => category.id === id),
};
