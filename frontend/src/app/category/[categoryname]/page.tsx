import React from 'react';
import CategoryClient from './CategoryClient';
import Navbar from '@/components/navbar';
import BrandReview from '@/components/brandreview';
import Footer from '@/components/footer';

async function fetchProducts(categoryname: string) {
  const response = await fetch('http://localhost:5000/product/category', {
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

const CategoryPage = async ({ params }: { params: { categoryname: string } }) => {
  const { categoryname } = params;
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
