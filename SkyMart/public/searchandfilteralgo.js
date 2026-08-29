 const query = filterValue.search.trim().toLowerCase();

  const filteredProducts = productsData
    .filter((product) => {
      const matchesSearch =!query || 
        
        [
          product.title,
          product.category,
          product.price,
          product.rating.rate,
        ].some((value) =>
          String(value).toLowerCase().includes(query),
        );

      const matchesCategory =
        !filterValue.category ||
        product.category === filterValue.category;

      return matchesSearch && matchesCategory;
    })
    .sort((firstProduct, secondProduct) => {
      switch (filterValue.featured) {
        case "Price: Low → High":
          return firstProduct.price - secondProduct.price;

        case "Price: High → Low":
          return secondProduct.price - firstProduct.price;

        case "Top Rated":
          return secondProduct.rating.rate - firstProduct.rating.rate;

        case "Lowest Rated":
          return firstProduct.rating.rate - secondProduct.rating.rate;

        default:
          return 0;
      }
    });