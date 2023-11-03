import { useState } from "react";
import Product from "./Product";

function ProductList() {
  const products = [
    { productName: "Pens", upvotes: 5, downvotes: 3 },
    { productName: "Pencils", upvotes: 6, downvotes: 2 },
    { productName: "Erasers", upvotes: 4, downvotes: 1 },
    { productName: "Crayons", upvotes: 10, downvotes: 3 },
    { productName: "Paper", upvotes: 15, downvotes: 2 },
    { productName: "Drawing Notebooks", upvotes: 20, downvotes: 0 },
  ];

 const [productList,setProductList]=useState(products);
 const productComponents=products.map((product) => <Product key={product.productName} productName={product.productName}
     upvotes= {product.upvotes} downvotes={product.downvotes}/>);
  return (<>
     {productComponents}
  </>);
}
export default ProductList;