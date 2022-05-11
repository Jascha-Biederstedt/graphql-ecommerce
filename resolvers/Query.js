const { products, categories } = require('../db');

exports.Query = {
  products: () => products,
  product: (parent, args, context) =>
    products.find(product => product.id === args.id),

  categories: () => categories,
  category: (parent, args, context) =>
    categories.find(category => category.id === args.id),
};
