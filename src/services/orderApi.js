import { apiFetch } from "./apiClient";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function createOrder(order, accessToken) {
  return apiFetch("/orders/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(order),
  });
}

export function fetchMyOrders(accessToken) {
  return apiFetch("/orders/", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
}
