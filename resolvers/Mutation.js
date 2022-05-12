const { v4: uuid } = require('uuid');

exports.Mutation = {
  addCategory: (parent, { input }, { db }) => {
    const { name } = input;

    const newCategory = {
      id: uuid(),
      name,
    };

    db.categories.push(newCategory);

    return newCategory;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };

    db.products.push(newProduct);

    return newProduct;
  },

  addReview: (parent, { input }, { db }) => {
    const { title, comment, rating, productId } = input;

    const newReview = {
      id: uuid(),
      date: new Date().toISOString().slice(0, 10),
      title,
      comment,
      rating,
      productId,
    };

    db.reviews.push(newReview);

    return newReview;
  },

  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter(category => id !== category.id);

    db.products = db.products.map(product => {
      if (id === product.categoryId)
        return {
          ...product,
          categoryId: null,
        };

      return product;
    });

    return true;
  },

  deleteProduct: (parent, { id }, { db }) => {
    db.products = db.products.filter(product => product.id !== id);

    db.reviews = db.reviews.filter(review => review.productId !== id);

    return true;
  },

  deleteReview: (parent, { id }, { db }) => {
    db.reviews = db.reviews.filter(review => review.id !== id);

    return true;
  },
};
