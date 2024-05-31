import { Product } from "models/products";
import { getRequest } from "../config";

export const getAllProducts = async (): Promise<Product[]> => {
  const response: any = await getRequest({ url: "products" });
  return response;
};
