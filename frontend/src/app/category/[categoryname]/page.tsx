import Navcompomonent from '@/components/navbar'
import Productinfo from '@/components/productcard';
import React from 'react'

const Category_search_result =async ({params}:{params:{categoryname:string}}) => {
    const {categoryname}=params;
    
    // const data=await fetch(`https://api.example.com/category/${categoryname}`)
  return (
    <div>
        <Navcompomonent/>
       <div>{categoryname}</div>
    <Productinfo/>
    </div>
  )
}

export default Category_search_result