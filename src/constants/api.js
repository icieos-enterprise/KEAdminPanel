import axios from "axios";
import showToast from "../utils/toastNotifications";
import { DEV, PROD } from "./environment";
const currentEnvironment = process.env.REACT_APP_ENVIRONMENT;
const environmentSetup = currentEnvironment && currentEnvironment === "prod" ? PROD : DEV;

const api = axios.create({
    baseURL: environmentSetup.REACT_APP_API_BASE_URL,
});

// Use axios interceptors to include the token in all requests
api.interceptors.request.use(
    (config) => {
        if (config?.token) {
            config.headers.Authorization = `Bearer ${config.token}`; // Attach token to the request
            delete config.token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("Intercepted error:", error);
        if (error.response) {
            // Handle error responses
            showToast(
                "error",
                error.response.data.message || "An error occurred"
            );
            console.log("Data:", error.response.data);
        } else if (error.request) {
            // Handle no response received
            console.log("Request:", error.request);
        } else {
            // Handle other errors
            console.log("Error message:", error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
