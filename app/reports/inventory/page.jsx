"use client";
import React from "react";

const sampleData = [
  {
    id: "P001",
    product: "Coca-Cola",
    category: "Drinks",
    channel: "Store Front",
    stock: 150,
  },
  {
    id: "P002",
    product: "Sprite",
    category: "Drinks",
    channel: "Vending Machine",
    stock: 85,
  },
  {
    id: "P003",
    product: "Salted Peanuts",
    category: "Snacks",
    channel: "Store Front",
    stock: 200,
  },
  {
    id: "P004",
    product: "Mixed Nuts",
    category: "Snacks",
    channel: "Vending Machine",
    stock: 45,
  },
];

const Inventory = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Inventory Report
      </h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr>
              <th className="px-6 py-3">Product ID</th>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Sales Channel</th>
              <th className="px-6 py-3">Stock Level</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-black">{item.id}</td>
                <td className="px-6 py-4 text-black">{item.product}</td>
                <td className="px-6 py-4 text-black">{item.category}</td>
                <td className="px-6 py-4 text-black">{item.channel}</td>
                <td className="px-6 py-4 ">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.stock <= 50
                        ? "bg-red-100 text-red-800"
                        : item.stock <= 100
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.stock} items
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
