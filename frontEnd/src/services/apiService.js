import axios from "axios";

// Define the base URL for the API
const API_URL = "http://localhost:8000/api/data/";

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle API errors
const handleError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const status = error.response.status;
    const message =
      error.response.data.message || "An unexpected error occurred";
    console.error(`API Error ${status}: ${message}`);
    return { status, message };
  } else if (error.request) {
    // The request was made but no response was received
    console.error("API Error: No response received");
    return { status: 0, message: "No response from server" };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("API Error:", error.message);
    return { status: 0, message: error.message };
  }
};

// Function to get data from the API
export const getData = async () => {
  try {
    const response = await apiClient.get("");
    return response.data;
  } catch (error) {
    const errorDetails = handleError(error);
    throw new Error(errorDetails.message);
  }
};

// Function to post data to the API
export const postData = async (data) => {
  try {
    const response = await apiClient.post("create/", { data });
    return response.data;
  } catch (error) {
    const errorDetails = handleError(error);
    throw new Error(errorDetails.message);
  }
};
