import { apiFetch } from "./apiClient";

export function fetchMenu() {
  return apiFetch("/menu/");
}