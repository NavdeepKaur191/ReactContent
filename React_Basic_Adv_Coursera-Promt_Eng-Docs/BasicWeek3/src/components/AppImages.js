import park from "../assets/images/centralpark.jpg";
import logo from "../assets/images/logo.png"

function AppImages(){

  const randomImageUrl = "https://picsum.photos/400/265";

  return(
    <div>
      <h1>
        Task:  add 3 images with some styling
      </h1>
      <img
        width={600}
        src={logo}
        alt="Logo" 
      />
      <br />
      <img 
        height={200}
        width={300}
        src={park}
        alt="Central Park"
      />
      <br />
      <img 
        height={200}
        src={require("../assets/images/parkflowers.jpg")}
        alt="Park Flowers"
      />
      <br />
      <img 
        height={200}
        src={randomImageUrl}
        alt="Random"
      />
    </div>
  )

};
export default AppImages;