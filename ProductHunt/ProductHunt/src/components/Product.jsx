//eslint-disable-next-line import/no-unresolved
import upvoteImgUrl from "url:../images/arrow_upward.png";

//eslint-disable-next-line import/no-unresolved
import downVoteImgUrl from "url:../images/arrow_downward.png";

function Product({ productName, upvotes, downvotes, setProductList }) {
  function incrementUpvote(productName) {
    setProductList((prevProductList) => {
      const updatedProductsList = [];
      for (let i = 0; i < prevProductList.length; i++) {
        const currentProduct = prevProductList[i];
        if (currentProduct.productName === productName) {
          let newUpvotes = currentProduct.upvotes + 1;
          const updatedProduct = {
            ...currentProduct,
            upvotes: newUpvotes,
          };
          updatedProductsList.push(updatedProduct);
        } else updatedProductsList.push(currentProduct);
      }
      return updatedProductsList;
    });
  }
  function incrementDownVote(productName) {
    setProductList((prevProductList) => {
      const updatedProductsList = [];
      for (let i = 0; i < prevProductList.length; i++) {
        const currentProduct = prevProductList[i];
        if (currentProduct.productName === productName) {
          let newDownVotes = currentProduct.downvotes + 1;
          const updatedProduct = {
            ...currentProduct,
            downvotes: newDownVotes,
          };
          updatedProductsList.push(updatedProduct);
        } else updatedProductsList.push(currentProduct);
      }
      return updatedProductsList;
    });
  }
  return (
    <div className="mx-auto  w-80 my-2 p-4 border-4 border-purple-300 hover:border-purple-700 ">
      <h1 className="text-center text-lg text-purple-700">
        <strong>{productName}</strong>
      </h1>
      <br></br>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="text-sm ">
          <p className="text-purple-600">
            <strong >Upvotes : </strong>
            {upvotes}
          </p>
          <p className="text-purple-600">
            <strong >Downvotes : </strong>
            {downvotes}
          </p>
        </div>
        <button
          onClick={() => incrementUpvote(productName)}
          className="row-span-2"
        >
          <img src={upvoteImgUrl} alt="upvote" />
        </button>
        <button
          onClick={() => incrementDownVote(productName)}
          className="row-span-2"
        >
          <img src={downVoteImgUrl} alt="downVote" />
        </button>
      </div>
    </div>
  );
}

export default Product;
