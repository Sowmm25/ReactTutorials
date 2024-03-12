import { useParams } from "react-router-dom"

export const ProductDetails = () => {
  const param=useParams();
  console.log(param);
  return (
    <main>
    <div className="component">productDetails-{param.id}</div>
    </main>
  )
}
