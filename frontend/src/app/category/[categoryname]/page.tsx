import React from 'react';
import CategoryClient from './CategoryClient';
import Navbar from '@/components/navbar';
import BrandReview from '@/components/brandreview';
import Footer from '@/components/footer';

async function fetchProducts(categoryname: string) {
  const response = await fetch(`https://e-commerce-2gts.onrender.com/product/${category}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category: categoryname }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data.products || [];
}

interface CategoryPageProps {
  params: Promise<{
    categoryname: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const resolvedParams = await params; // Resolve the Promise
  const { categoryname } = resolvedParams;
  const products = await fetchProducts(categoryname);

  return (
    <div>
      <Navbar />
      <CategoryClient categoryname={categoryname} initialProducts={products} />
      <BrandReview />
      <Footer />
    </div>
  );
};

export default CategoryPage;
