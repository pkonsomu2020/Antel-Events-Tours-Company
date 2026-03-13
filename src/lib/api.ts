// API Configuration
// This file centralizes API URL configuration for easy deployment

/**
 * Get the API base URL from environment variables
 * Falls back to relative path for Vite proxy in development
 */
export const getApiUrl = (): string => {
  // In production (Vercel), use the environment variable
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // In development, use relative path (Vite proxy handles it)
  return '';
};

/**
 * Make an API request with the correct base URL
 */
export const apiRequest = async (
  endpoint: string,
  options?: RequestInit
): Promise<Response> => {
  const baseUrl = getApiUrl();
  const url = `${baseUrl}${endpoint}`;
  
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
};
