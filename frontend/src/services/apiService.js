// src/services/apiService.js
import axios from "axios";

// Configurez l'URL de base de votre backend
const api = axios.create({
  baseURL: "http://localhost:8080/api", // Modifiez l'URL selon votre backend
});

// Exemple d'appel API
export const getHello = async () => {
  try {
    const response = await api.get("/hello");
    return response.data;
  } catch (error) {
    console.error("Error fetching hello:", error);
    throw error;
  }
};
