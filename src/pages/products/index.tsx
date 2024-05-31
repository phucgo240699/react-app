import withAllProducts from "hoc/products";
import ProductsList from "components/ProductLists";

const ProductsPage = () => {
  const AllProductsList = withAllProducts(ProductsList);
  return <AllProductsList />;
};

export default ProductsPage;
