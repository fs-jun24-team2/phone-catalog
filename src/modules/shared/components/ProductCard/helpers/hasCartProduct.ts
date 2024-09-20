export const hasCartProduct = (id: string): boolean => {
  const localCart = JSON.parse(localStorage.getItem('cart') || `{}`);

  return id in localCart;
};
