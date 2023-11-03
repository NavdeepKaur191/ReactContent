//eslint-disable-next-line import/no-unresolved
import upvoteImgUrl from "url:../images/arrow_upward.png";

//eslint-disable-next-line import/no-unresolved
import downVoteImgUrl from "url:../images/arrow_downward.png";


function Product({productName,upvotes, downvotes})
{
    return(
        <div className="divide-solid border-solid py-4">
            <h1>{productName}</h1>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
  <div ><p>Upvotes : ${upvotes}</p>
  <p>Downvotes : ${downvotes}</p>
  </div>
  <div className="row-span-2"><img src={upvoteImgUrl} alt="upvote"/></div>
  <div className="row-span-2"><img src={downVoteImgUrl} alt="downVote"/></div>
</div>
        </div>
    );
}

export default Product;