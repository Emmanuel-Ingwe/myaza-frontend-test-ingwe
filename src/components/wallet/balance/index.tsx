import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";

const wallets = [
  { id: 1, name: "NGN Wallet", balance: "245,800.89", flag: "/icons/ngn.svg" },
  { id: 2, name: "GBP Wallet", balance: "245,800.89", flag: "/icons/eng.svg" },
  { id: 3, name: "USD Wallet", balance: "245,800.89", flag: "/icons/usa.svg" },
];

const balance = () => {
  return (
    <div className="bg-[#2D2B4D] p-6 rounded-xl mb-10 text-white">
      {/* Balance Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Your consolidated balance</p>
          <h1 className="text-3xl mt-2 font-bold">$34,780,267.08</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#CBC8FF] text-[#1D1D41] font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={16} /> Add New Wallet
          </button>
          <button className="p-1 bg-[#2D2B4D] border rounded-full">
            <MoreHorizontal size={15} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-[#29294F] p-4 rounded-lg w-1/3 flex border border-[#393985]">
            <img
              src={wallet.flag}
              alt={wallet.name}
              className="w-12 h-8 object-cover"
            />
            <div className="ml-3">
              <p className="text-lg flex items-center gap-2">{wallet.name}</p>
              <p className="text-gray-400 text-sm">Balance: {wallet.balance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default balance;
