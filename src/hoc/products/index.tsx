import { Product } from "models/products";
import React from "react";
import { useEffect, useState } from "react";
import { getAllProducts } from "services/products";

interface WrappedComponentProps {
  products: Product[];
}

const withAllProducts = (WrappedComponent: React.FC<WrappedComponentProps>) => {
  const WrappedComponentWithAllProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      async function handleGettingAllProducts() {
        setProducts(await getAllProducts());
      }
      handleGettingAllProducts();
    }, []);
    return <WrappedComponent products={products} />;
  };
  return WrappedComponentWithAllProducts;
};

export default withAllProducts;
