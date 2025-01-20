import { test, describe, expect } from "@jest/globals";
import { fetchAddresses, updateAddress, addAddress, deleteAddress } from "./data";

describe("data", () => {
  test("fetchAddresses returns addresses", async () => {
    const addresses = await fetchAddresses();
    expect(addresses).toBeDefined();
    expect(addresses.length).toBeGreaterThan(0);
  });

  test("addAddress adds a new address", async () => {
    const newAddress = { firstName: "Alice", lastName: "Wonderland" };
    const addedAddress = await addAddress(newAddress);
    expect(addedAddress.firstName).toBe(newAddress.firstName);

    // Cleanup
    await deleteAddress(addedAddress.id);
  });

  test("updateAddress updates an address", async () => {
    const newAddress = { firstName: "Alice", lastName: "Wonderland" };
    const addedAddress = await addAddress(newAddress);

    addedAddress.lastName = "Updated";
    const updatedAddress = await updateAddress(addedAddress.id, addedAddress);
    expect(updatedAddress.lastName).toBe("Updated");

    // Cleanup
    await deleteAddress(addedAddress.id);
  });
});
