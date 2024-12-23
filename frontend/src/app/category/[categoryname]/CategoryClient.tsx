'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Productinfogpt from '@/components/productinfogpt';

interface Product {
  _id: string;
  name: string;
  // Add other product properties
}

const CategoryClient = ({
  categoryname,
  initialProducts,
}: {
  categoryname: string;
  initialProducts: Product[];
}) => {
  const [firstProducts, setFirstProducts] = useState<Product[]>(initialProducts);
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
        {firstProducts.map((firstProduct) => (
          <div
            key={firstProduct._id}
            onClick={() => handleProductClick(firstProduct._id)}
            className="cursor-pointer"
          >
            <Productinfogpt product={firstProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryClient;
