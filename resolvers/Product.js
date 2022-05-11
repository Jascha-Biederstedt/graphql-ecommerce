const { categories } = require('../db');

exports.Product = {
  category: (parent, args, context) =>
    categories.find(category => category.id === parent.categoryId),
};
