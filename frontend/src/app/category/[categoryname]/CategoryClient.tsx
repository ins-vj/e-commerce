'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Productinfogpt from '@/components/productinfogpt';

interface Product {
  name: string;
  price: string;
  img: string;
  category: string;
  rating: number;
  productId: string;
  inStockValue: number;
  soldStockValue: number;
  visibility?: string;
}


const CategoryClient = ({
  categoryname,
  initialProducts,
}: {
  categoryname: string;
  initialProducts: Product[];
}) => {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto">
      <div className="text-center text-[3rem] border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        {categoryname}
      </div>
      <div className="products-grid grid grid-cols-[repeat(auto-fill,_minmax(25vw,_1fr))] gap-[4vw] p-2">
        {initialProducts.map((product) => (
          <div
            key={product.productId}
            onClick={() => handleProductClick(product.productId)}
            className="cursor-pointer"
          >
            <Productinfogpt product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryClient;
