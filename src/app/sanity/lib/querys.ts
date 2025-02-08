export const products = `
*[_type == "product"]{
  _id,
  productName,
  description,
  category,
  price,
  inventory,
  colors,
  status,
  imageurl
}
`;
