import { useState } from "react";
import { postData } from "../../services/apiService";
import "./card.css";

const PostCard = () => {
  // State to hold the input data from the user
  const [inputData, setInputData] = useState("");
  // State to hold the response message after data submission
  const [responseMessage, setResponseMessage] = useState("");
  // State to manage error messages
  const [error, setError] = useState("");
  // State to manage loading state of the request
  const [loading, setLoading] = useState(false);

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading to true when request starts
    setError(""); // Clear any previous errors
    setResponseMessage(""); // Clear previous response message

    try {
      // Use the postData function from apiService.js
      await postData(inputData);
      // Set success message and clear input field if submission is successful
      setResponseMessage("Data submitted successfully!");
      setInputData("");
    } catch (error) {
      // Handle errors by setting an appropriate error message
      setError(error.message || "An unexpected error occurred");
    } finally {
      // Set loading to false when request completes (whether successful or not)
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter some data"
          required // Ensure input field cannot be left empty
        />
        <button type="submit" disabled={loading}>
          {/* Show submitting state or button text based on the loading state */}
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {/* Display response message if available */}
      {responseMessage && (
        <p className="card-text success">{responseMessage}</p>
      )}
      {/* Display error message if there's an error */}
      {error && <p className="card-text error">{error}</p>}
    </div>
  );
};

export default PostCard;
