'use client';
import { getAllProduct } from "@/actions/product/get-all-product";
import { ProductGrid } from "../components/products/product-grid/ProductGrid";

export default function Home() {

  const { data: products, isLoading, error } = getAllProduct();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <>

    <ProductGrid products={ products! } />
    </>
  );
}
