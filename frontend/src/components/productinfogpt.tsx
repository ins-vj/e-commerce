import React from 'react';
import { Info, ShoppingCart } from 'lucide-react';

// // Define the Product type
// interface Product {
//   img: string;
//   imgAlt?: string; // Optional alternative image
//   name: string;
//   price: string; // Price as a string (e.g., "₹5000")
// }

interface Product {
  name: string;
  price: string;
  img: string;
  imgAlt?: string; // Optional alternative image
  category: string;
  rating: number;
  productId: string;
  inStockValue: number;
  soldStockValue: number;
  visibility?: string;
}


interface ProductInfoProps {
  product: Product;
}

const Productinfogpt: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl h-[90vh] w-[30vw] overflow-hidden p-3 my-2">
      <div className="productimg group relative h-full w-full">
        {/* Main product image with hover effect */}
        <img
          src={product.img}
          alt={product.name}
          className="transition-all duration-[1000ms] group-hover:opacity-0 absolute inset-0 w-full h-full object-cover"
        />
        {/* Alternative image on hover */}
        <img
          src={product.imgAlt || product.img}
          alt={`Alternative view of ${product.name}`}
          className="transition-all duration-[1000ms] opacity-0 group-hover:opacity-100 absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Product information overlay */}
        <div className="more-info absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/90 to-black/0">
          <div className="space-y-4 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-between">
              <h2 className="productname text-2xl font-bold text-white">
                {product.name}
              </h2>
              <span className="productprice text-xl font-semibold text-white">
                {product.price}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="emioption px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <span className="text-sm">EMI starting at </span>
                <span className="font-bold">
                  ₹{Math.floor(parseInt(product.price.replace('₹', '').replace(/,/g, '')) / 6)}/Month
                </span>
              </div>
              
              <div className="flex gap-2">
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
                  aria-label="More information"
                >
                  <Info className="w-5 h-5 text-white" />
                </button>
                <button
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productinfogpt;
