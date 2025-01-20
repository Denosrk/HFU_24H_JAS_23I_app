const BASE_URL = "http://localhost:20241/addresses";

export async function fetchAddresses() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch addresses");
  }
  return await response.json();
}

export async function updateAddress(id, updatedAddress) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedAddress),
  });
  if (!response.ok) {
    throw new Error("Failed to update address");
  }
  return await response.json();
}

export async function addAddress(newAddress) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAddress),
  });
  if (!response.ok) {
    throw new Error("Failed to add address");
  }
  return await response.json();
}

export async function deleteAddress(id) {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete address");
  }
}
const CARS_URL = "http://localhost:20242/cars";

export async function fetchCars() {
  const response = await fetch(CARS_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  return await response.json();
}
