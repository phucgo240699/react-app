import { Product } from "models/products";

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products = [] }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li>
            <br />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.categoryName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
