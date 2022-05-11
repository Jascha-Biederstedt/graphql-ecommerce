exports.Product = {
  category: ({ categoryId }, args, { categories }) =>
    categories.find(category => category.id === categoryId),
};
