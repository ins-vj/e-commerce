import React from 'react';
import Brandreview from '@/components/brandreview';
import Footer from '@/components/footer';
import Navcompomonent from '@/components/navbar';
import Productinfogpt from '@/components/productinfogpt';

const Page = async () => {
  let products = [];
  try {
    const response = await fetch('http://localhost:5000/product/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: 'books' }),
    });

    const data = await response.json();
    console.log('Fetched Data:', JSON.stringify(data, null, 2));

    if (data.success) {
      products = data.products;
    } else {
      console.warn('No products found for the given category.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div>
      <Navcompomonent />
      <div className="hero-section bg-green-500 h-[85vh]">.</div>
      <div className="featured-category h-[80vh] bg-blue-800 ">category 1</div>
      <div className="products-grid">
        {products.map((product) => (
          <Productinfogpt key={product._id} product={product} />
        ))}
      </div>
      <div className="featured-category h-[80vh] bg-slate-800 ">category 2</div>
      <Brandreview />
      <Footer />
    </div>
  );
};

export default Page;
