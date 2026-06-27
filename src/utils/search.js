export const filterProducts = (products, filters) => {
  const query = filters.query.trim().toLowerCase();

  return products.filter((product) => {
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    const matchesCategory = filters.category === "all" || product.category === filters.category;
    const matchesPrice = product.discountPrice <= Number(filters.maxPrice);
    const matchesRating = product.rating >= Number(filters.rating);
    const matchesStock = !filters.inStock || product.stock > 0;

    return matchesQuery && matchesCategory && matchesPrice && matchesRating && matchesStock;
  });
};
