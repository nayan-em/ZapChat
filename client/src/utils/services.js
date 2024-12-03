export const baseURL = "http://localhost:5000/api";

export const postRequest = async (url, body) => {
  // Create response object to  send to the backend
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  // Jsonify the data
  const data = await response.json();

  // Check for error message
  if (!response.ok) {
    let message;
    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};
