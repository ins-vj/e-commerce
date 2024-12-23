'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Brandreview from '@/components/brandreview';
import Footer from '@/components/footer';
import Navcompomonent from '@/components/navbar';
import Productinfogpt from '@/components/productinfogpt';
import { NotificationBanner } from '@/components/NotificationBanner/NotificationBanner';
import { Bell } from 'lucide-react';

interface Product {
  _id: string;
  [key: string]: any; // For additional properties
}

const Page = () => {
  const router = useRouter();

  const [firstProducts, setFirstProducts] = useState<Product[]>([]);
  const [secondProducts, setSecondProducts] = useState<Product[]>([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response1 = await fetch('https://e-commerce-2gts.onrender.com/product/category', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category: 'books' }),
        });
        const data1 = await response1.json();
        if (data1.success) {
          setFirstProducts(data1.products);
        }

        const response2 = await fetch('https://e-commerce-2gts.onrender.com/product/category', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category: 'stationery' }),
        });
        const data2 = await response2.json();
        if (data2.success) {
          setSecondProducts(data2.products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle product click
  const handleProductClick = (productid: string, router: ReturnType<typeof useRouter>) => {
    router.push(`/product/${productid}`);
  };

  return (
    <div>
      <Navcompomonent />
      <NotificationBanner 
        text="Winter Sale is Live!!!  " 
        icon={Bell}
        backgroundColor="bg-purple-500"
        repeatingItems={10}
      />
      <div
        style={{ backgroundColor: '#FFC1CC' }}
        className="hero-section h-[85vh] flex justify-between overflow-clip"
      >
        <div className="img3 h-full w-[45vw]">
          <img
            src="/images/web_banner-meena-Photoroom.png"
            alt=""
            className="h-full object-cover object-right"
          />
        </div>

        <div className="imgcontainer h-[48vh] left-[40vw] top-[28vh] bg-blend-darken absolute ">
          <img
            src="/images/Mytalorzone_Logo_Transparent-ai-brush-removebg-x7snkn2s.png"
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="flex w-[40vw] justify-around">
          <div className="img2 h-full">
            <img
              src="/images/5_33eedb40-1a52-4f07-81e5-48e05ed55bbf_540x-Photoroom.png"
              alt=""
              className=" h-full object-cover"
            />
          </div>
          <div className="img3 h-full">
            <img
              src="/images/pic3.png"
              alt=""
              className="h-full object-cover relative top-10 "
            />
          </div>
        </div>
      </div>

      <div className="featured-category bg-blue-800 pt-20 py-4 z-50">
        <div className="text-center text-[3rem] border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">Category 1</div>
        <div className="products-grid grid grid-cols-[repeat(auto-fill,_minmax(25vw,_1fr))] gap-[4vw] p-2">
          {firstProducts.map((firstProduct) => (
            <div
              key={firstProduct._id}
              onClick={() => handleProductClick(firstProduct._id, router)}
              className="cursor-pointer"
            >
              <Productinfogpt product={firstProduct} />
            </div>
          ))}
        </div>
      </div>
      <div className="featured-category bg-slate-600 pt-20 py-4">
        <div className="text-center text-[3rem] border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">Category 2</div>
        <div className="products-grid grid grid-cols-[repeat(auto-fill,_minmax(25vw,_1fr))] gap-[4vw] p-2">
          {secondProducts.map((secondProduct) => (
            <div
              key={secondProduct._id}
              onClick={() => handleProductClick(secondProduct._id, router)}
              className="cursor-pointer"
            >
              <Productinfogpt product={secondProduct} />
            </div>
          ))}
        </div>
      </div>
      <Brandreview />
      <Footer />
    </div>
  );
};

export default Page;
