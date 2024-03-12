import { useSearchParams, useLocation} from 'react-router-dom';
import React from 'react';


export const ProductList = () => {
  const [searchParams]=useSearchParams();
  const location=useLocation();
  console.log(location);
  // http://localhost:3000/products?q=react&instock=true&rating=5#top   #-hash
  // // console.log(searchParams.get("q"));
  // console.log(searchParams.get("instock"));
  // console.log(searchParams.get("rating"));
  return (
    <main>
    <div className='component'>ProductList</div>
    </main>
  )
}
