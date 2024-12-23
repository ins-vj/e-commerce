import React from 'react'

const Productinfo = () => {

  return (
    <div className="bg-red-500 h-[90vh] w-[25vw] overflow-hidden">
    <div className="productimg group relative h-full w-full">
      <img
        src="https://overlaysnow.com/cdn/shop/files/1L9A1190_ace29737-819a-4bd2-bde1-f132c3b63c7d.jpg?v=1734617909&width=800"
        alt=""
        className="transition-opacity duration-[1000ms] group-hover:opacity-0 absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="https://overlaysnow.com/cdn/shop/files/1L9A1196_8f76e86c-41f5-4055-acb3-99e83b2452fa.jpg?v=1734617909&width=800"
        alt=""
        className="transition-opacity opacity-0 duration-[1000ms] group-hover:opacity-100 absolute inset-0 w-full h-full object-cover"
      />
      <div className="more-info relative z-10">
        <div className="productname">Raven Ted Sherpa Oversized Hoodie</div>
        <div className="productprice">₹2999</div>
        <div className="emioption">₹500/Month</div>
      </div>
    </div>
  </div>
  
  )
}

export default Productinfo