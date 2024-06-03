'use client';
import { ProductGrid } from "../components/products/product-grid/ProductGrid";
import { useProducts } from "@/hooks/product/useProducts";
import { Loading } from "../components/ui";

export default function Home() {

  const { data: products, isLoading, error } = useProducts();


  if (isLoading) return <Loading />;
  if (error) return <div>Error loading products</div>;

  return (
    <>

    <ProductGrid products={ products! } />
    </>
  );
}
