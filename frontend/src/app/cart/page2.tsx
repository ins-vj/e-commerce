import Brandreview from '@/components/brandreview';
import Current_trend from '@/components/current-trend';
import Footer from '@/components/footer';
import Navcompomonent from '@/components/navbar';
import React from 'react';

const DetailedProduct = async ({ params }: { params: { productid: string } }) => {
  const { productid } = params;
  let productData: any = null;

  try {
    const response = await fetch(`http://localhost:5000/product/${productid}`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }

    const data = await response.json();
    if (data.success) {
      productData = data.product;
    } else {
      console.warn('Product data fetch was unsuccessful.');
    }
  } catch (error) {
    console.error('Error fetching product data:', error);
  }

  return (
    <div className='bg-gray-200'>
      <Navcompomonent />
      {productData ? (
        <div className="product-detail w-[90vw] mx-auto py-10">
          <div className="product-header grid grid-cols-12 gap-8">
            {/* Left side - Thumbnail Images */}
            <div className="col-span-2">
              <div className="bg-white rounded-xl p-4 h-full flex flex-col gap-4 overflow-y-auto">
                <div className="grid grid-cols-1 gap-4 auto-rows-min">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-gray-400 transition-colors aspect-square"
                    >
                      <img
                        src={productData.img}
                        alt={`${productData.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center - Main Image */}
            <div className="col-span-6">
              <div className="bg-white rounded-xl p-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={productData.img}
                    alt={productData.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Product Info */}
            <div className="col-span-4 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
                <p className="text-xl text-gray-600 mt-2">Category: {productData.category}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">₹{productData.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-gray-700">{productData.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Stock Status: 
                  <span className={`ml-2 ${productData.inStockValue ? 'text-green-600' : 'text-red-600'}`}>
                    {productData.inStockValue ? 'In Stock' : 'Out of Stock'}
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-gray-700 font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button className="px-3 py-1 border-r hover:bg-gray-100">-</button>
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-16 text-center py-1 focus:outline-none"
                    />
                    <button className="px-3 py-1 border-l hover:bg-gray-100">+</button>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Product Details</h3>
                <p className="text-gray-600">
                  Sold items: {productData.soldStockValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg text-red-500 mt-10">
          Unable to load product details. Please try again later.
        </div>
      )}
      <Current_trend />
      <Brandreview />
      <Footer />
    </div>
  );
};

export default DetailedProduct;