const { products } = require('../db');

exports.Category = {
  products: (parent, args, context) =>
    products.filter(product => product.categoryId === parent.id),
};
