import React, { useState } from "react";
import axios from "axios";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    merchantName: "",
    paymentType: "UPI Address",
    upiId: "",
    amount: "",
    description: "",
    paymentMode: "",
    utrNumber: "",
    transactionId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://43.204.96.98:8000/payment/submit", formData,{withCredentials: true});
      alert("Payment info saved!");
      setFormData({
        merchantName: "",
        paymentType: "UPI Address",
        upiId: "",
        amount: "",
        description: "",
        paymentMode: "",
        utrNumber: "",
        transactionId: "",
      });
    } catch (err) {
      console.error("Payment error:", err);
      alert("Error saving payment details.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-zinc-900 rounded-lg shadow-xl p-6 border border-zinc-700"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-red-500">
          Scan & Pay via UPI
        </h1>

        <div className="flex justify-center mb-4">
          <img
            src="/images/QRcode.jpg"
            alt="QR Code"
            className="w-64 h-64 object-contain rounded-md border border-zinc-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Merchant / Payee Name</label>
          <input
            type="text"
            name="merchantName"
            value={formData.merchantName}
            onChange={handleChange}
            placeholder="Enter your business name..."
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Payment Address Type</label>
          <select
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
          >
            <option>UPI Address</option>
            <option>QR Code</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">UPI ID</label>
          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            placeholder="Enter your UPI ID here..."
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Transaction Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter transaction amount..."
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Description / Notes</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description..."
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
            rows="2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Mode of Payment</label>
          <input
            type="text"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            placeholder="e.g. PhonePe, Paytm, GPay"
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">UTR Number</label>
          <input
            type="text"
            name="utrNumber"
            value={formData.utrNumber}
            onChange={handleChange}
            placeholder="Enter UTR number"
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Transaction ID</label>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            placeholder="Enter transaction ID"
            className="w-full px-3 py-2 rounded bg-zinc-800 text-white border border-zinc-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
        >
          Submit Payment Info
        </button>
      </form>
    </div>
  );
}
