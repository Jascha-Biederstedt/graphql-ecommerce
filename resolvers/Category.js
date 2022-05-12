exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProducts = db.products.filter(
      product => product.categoryId === categoryId
    );

    let filteredProducts = categoryProducts;

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
};
