import { useState } from "react";
import Product from "./Product";

function ProductList() {
  const [productList, setProductList] = useState([
    { productName: "Pens", upvotes: 5, downvotes: 3 },
    { productName: "Pencils", upvotes: 6, downvotes: 2 },
    { productName: "Erasers", upvotes: 4, downvotes: 1 },
    { productName: "Crayons", upvotes: 10, downvotes: 3 },
    { productName: "Paper", upvotes: 15, downvotes: 2 },
    { productName: "Drawing Notebooks", upvotes: 20, downvotes: 0 },
  ]);

  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("");

  function handleChange(e) {
    // console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value);
    if (e.target.name == "order") {
      setOrder(e.target.value);
    }
    if (e.target.name == "sortBy") {
      setSortBy(e.target.value);
    }
  }

  function sortProductsList(sortBy, order) {
    const sortByProperty = Object.values(sortBy)[0];
    const orderBy = Object.values(order)[0];
    if (sortByProperty == "productName" && orderBy == "ascending") {
      console.log(sortByProperty);
      console.log(orderBy);
      //console.log(sortedProducts);
      setProductList((prevProductList) => {
        return prevProductList.slice().sort(function (a, b) {
          const nameA = a.productName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.productName.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return 1;
          }
          if (nameA < nameB) {
            return -1;
          }
          // names must be equal
          return 0;
        });
      });
    }
    else if(sortByProperty == "productName" && orderBy == "descending") {
      console.log(sortByProperty);
      console.log(orderBy);
      //console.log(sortedProducts);
      setProductList((prevProductList) => {
        return prevProductList.slice().sort(function (a, b) {
          const nameA = a.productName.toUpperCase(); // ignore upper and lowercase
          const nameB = b.productName.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
      });
    }
    else  if (sortByProperty == "upvotes" && orderBy == "ascending") {      
      setProductList((prevProductList) => {
        return prevProductList.slice().sort((p1, p2) => (p1.upvotes < p2.upvotes) ? -1 : (p1.upvotes > p2.upvotes) ? 1 : 0);
      });
    }
    else  if (sortByProperty == "upvotes" && orderBy == "descending") {      
      setProductList((prevProductList) => {
        return prevProductList.slice().sort((p1, p2) => (p1.upvotes < p2.upvotes) ? 1 : (p1.upvotes > p2.upvotes) ? -1 : 0);
      });
    }
    else  if (sortByProperty == "downvotes" && orderBy == "descending") {      
      setProductList((prevProductList) => {
        return prevProductList.slice().sort((p1, p2) => (p1.downvotes < p2.downvotes) ? 1 : (p1.downvotes > p2.downvotes) ? -1 : 0);
      });
    }
    else  if (sortByProperty == "downvotes" && orderBy == "ascending") {      
      setProductList((prevProductList) => {
        return prevProductList.slice().sort((p1, p2) => (p1.downvotes < p2.downvotes) ? -1 : (p1.downvotes > p2.downvotes) ? 1 : 0);
      });
    }
    console.log(productList);
  }
  const productComponents = productList.map((product) => (
    <Product
      key={product.productName}
      productName={product.productName}
      upvotes={product.upvotes}
      downvotes={product.downvotes}
      setProductList={setProductList}
    />
  ));
  return (
    <>
      <div className="mx-auto  w-64 my-2 py-2">
        <label
          htmlFor="sortBy"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Sort by option
        </label>
        <select
          id="sortBy"
          name="sortBy"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="DEFAULT">Choose a value</option>
          <option value="upvotes">Upvotes</option>
          <option value="downvotes">Downvotes</option>
          <option value="productName">ProductName</option>
        </select>
      </div>
      <div className="mx-auto  w-64 my-2 py-2">
        <label
          htmlFor="order"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Order
        </label>
        <select
          id="order"
          name="order"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="DEFAULT">Choose a value</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 mt-4 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => sortProductsList({ sortBy }, { order })}
        >
          {" "}
          Sort
        </button>
      </div>
      {productComponents}
    </>
  );
}
export default ProductList;
