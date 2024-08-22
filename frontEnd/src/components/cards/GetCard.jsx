import { useState } from "react";
import { getData } from "../../services/apiService";
import "./card.css";

const GetCard = () => {
  // State to hold fetched data from the API
  const [fetchedData, setFetchedData] = useState(null);
  // State to manage error messages
  const [error, setError] = useState(null);
  // State to manage loading state of the request
  const [loading, setLoading] = useState(false);

  // Function to handle the GET request to fetch data
  const handleGetData = async () => {
    setLoading(true); // Set loading to true when request starts
    setError(null); // Clear any previous errors
    try {
      // Use the getData function from apiService.js
      const data = await getData();
      // Update state with the fetched data
      setFetchedData(data);
    } catch (error) {
      // Handle errors by setting an error message and logging the error
      setError("There was an error fetching the data!");
      console.error("There was an error fetching the data!", error);
    } finally {
      // Set loading to false when request completes (whether successful or not)
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <button onClick={handleGetData} disabled={loading}>
        {/* Show loading state or button text based on the loading state */}
        {loading ? "Loading..." : "Get Data"}
      </button>
      {/* Display error message if there's an error */}
      {error && <p className="get-card-text error">{error}</p>}
      {/* Display fetched data if available */}
      {fetchedData && (
        <p className="card-text">{JSON.stringify(fetchedData.data)}</p>
      )}
    </div>
  );
};

export default GetCard;
