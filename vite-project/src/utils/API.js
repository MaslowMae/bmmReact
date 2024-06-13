// src/utils/API.js
import axios from 'axios';




// Create an instance of axios
const api = axios.create({
  baseURL: 'https://localhost:3001', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers here
  },
});



// Example GET request
export const fetchItems = async () => {
  try {
    const response = await api.get('../components/ItemList'); // Adjust endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Example POST request
export const createItem = async (itemData) => {
  try {
    const response = await api.post('/items', itemData); // Adjust endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

// Example PUT request
export const updateItem = async (id, itemData) => {
  try {
    const response = await api.put(`/items/${id}`, itemData); // Adjust endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error updating item:', error);
    throw error;
  }
};

// Example DELETE request
export const deleteItem = async (id) => {
  try {
    const response = await api.delete(`/items/${id}`); // Adjust endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};