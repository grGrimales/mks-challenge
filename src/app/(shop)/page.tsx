'use client';
import { ProductGrid } from "../components/products/product-grid/ProductGrid";
import { useProducts } from "@/hooks/product/useProducts";

export default function Home() {

  const { data: products, isLoading, error } = useProducts();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <>

    <ProductGrid products={ products! } />
    </>
  );
}
