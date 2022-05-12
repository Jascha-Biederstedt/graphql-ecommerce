exports.Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => product.onSale);
      }

      if ([1, 2, 3, 4, 5].includes(filter.avgRating)) {
        filteredProducts = filteredProducts.filter(product => {
          let sumRating = 0;
          let numberOfReviews = 0;

          db.reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });

          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= filter.avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, { db }) =>
    db.products.find(product => product.id === id),

  categories: (parent, args, { db }) => db.categories,
  category: (parent, { id }, { db }) =>
    db.categories.find(category => category.id === id),
};
