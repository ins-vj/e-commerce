'use client'
import Brandreview from '@/components/brandreview'
import Footer from '@/components/footer'
import Navcompomonent from '@/components/navbar'
import Productinfo from '@/components/productcard'
import Productinfogpt from '@/components/productinfogpt'
import React from 'react'

const handleProductClick=async(productid:string)=>{
  try {
    const response3=await fetch(`https://e-commerce-2gts.onrender.com/product/${productid}`);
    if (!response3.ok) {
      throw new Error("Failed to fetch product data");
    }
    const data3 = await response3.json();
    console.log("Product data:", data3);
    // Handle the data (e.g., display it, save it to state, etc.)
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
};


const page = async() => {
  let firstproducts = [];
  let secondproducts=[];
  try {
    const response = await fetch('https://e-commerce-2gts.onrender.com/product/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: 'books' }),
    });

    const data = await response.json();
    console.log('Fetched Data:', JSON.stringify(data, null, 2));

    if (data.success) {
      firstproducts = data.products;
    } else {
      console.warn('No products found for the given category.');
    }


    const response2 = await fetch('https://e-commerce-2gts.onrender.com/product/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: 'stationery' }),
    });

    const data2 = await response2.json();
    console.log('Fetched Data2:', JSON.stringify(data2, null, 2));

    if (data2.success) {
      secondproducts = data2.products;
    } else {
      console.warn('No products found for the given category.');
    }
    

  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div>
      <Navcompomonent/>
      <div style={{ backgroundColor: '#FFC1CC' }} className="hero-section h-[85vh] flex justify-between">
      <div className="img3 h-full w-[45vw]"><img src="/images/web_banner-meena-Photoroom.png" alt="" className='h-full object-cover object-right' /></div>

        <div className="imgcontainer h-[48vh] left-[40vw] top-[28vh] bg-blend-darken absolute "><img src='/images/Mytalorzone_Logo_Transparent-ai-brush-removebg-x7snkn2s.png' alt="" className='h-full object-cover'/></div>
        <div className='flex w-[40vw] justify-around'>
      <div className="img2 h-full"><img src="/images/5_33eedb40-1a52-4f07-81e5-48e05ed55bbf_540x-Photoroom.png" alt="" className=' h-full object-cover' /></div>
      <div className="img3 h-full"><img src="/images/pic3.png" alt="" className='h-full object-cover relative top-10 '/></div>
</div>
      </div>
      <Productinfo/>
      <div className="featured-category h-[80vh] bg-blue-800 ">category 1</div>
      <div className="products-grid grid grid-cols-[repeat(auto-fill,_minmax(25vw,_1fr))] gap-[4vw] p-2">
  {firstproducts.map((firstproduct) => (
    <div
      key={firstproduct._id}
      onClick={() => handleProductClick(firstproduct._id)}
      className="cursor-pointer"
    >
      <Productinfogpt product={firstproduct} />
    </div>
  ))}
</div>
      
      <div className="featured-category h-[80vh] bg-slate-800 ">category 2</div>
      <div className="products-grid grid grid-cols-[repeat(auto-fill,_minmax(25vw,_1fr))] gap-[4vw] p-2">
        {secondproducts.map((secondproduct) => (
          <Productinfogpt key={secondproduct._id} product={secondproduct} />
        ))}
      </div>
      <Brandreview/>
      <Footer/>
    </div>
  )
}

export default page