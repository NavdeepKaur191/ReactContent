import "../App"
import FeedbackForm from "../components/FeedbackForm";

function Feedback(){

  const handleSubmit = () => {
    console.log("Form Submitted!")
  }

  return(
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  )

}
export default Feedback;