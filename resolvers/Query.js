exports.Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = products.filter(product => product.onSale);
      }

      if ([1, 2, 3, 4, 5].includes(filter.avgRating)) {
        filteredProducts = filteredProducts.filter(product => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach(review => {
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
  product: (parent, { id }, { products }) =>
    products.find(product => product.id === id),

  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) =>
    categories.find(category => category.id === id),
};
