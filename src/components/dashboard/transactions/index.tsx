import React from "react";

const transactions = [
  {
    name: "Adobe After Effect",
    date: "Sat, 20 Apr 2020",
    amount: "$80.09",
    status: "Deposited",
    icon: "/icons/adobe.svg",
  },
  {
    name: "McDonald's",
    date: "Sat, 20 Apr 2020",
    amount: "$80.09",
    status: "Deposited",
    icon: "/icons/macdonalds.svg",
  },
  {
    name: "Levi",
    date: "Sat, 20 Apr 2020",
    amount: "$80.09",
    status: "Deposited",
    icon: "/icons/levi.svg",
  },
  {
    name: "Adobe After Effect",
    date: "Sat, 20 Apr 2020",
    amount: "$80.09",
    status: "Deposited",
    icon: "/icons/adobe.svg",
  },
  {
    name: "Levi",
    date: "Sat, 20 Apr 2020",
    amount: "$80.09",
    status: "Deposited",
    icon: "/icons/levi.svg",
  },
];

const TransactionsTable: React.FC = () => {
  return (
    <div className="bg-[#2D2B4D] mt-10 p-5 rounded-lg w-full text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-normal">Recent transactions</h2>
        <button className="text-sm text-gray-400 hover:text-gray-300">
          See All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-gray-400 font-normal text-sm border-b border-[#29294F]">
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Date</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} className="border-b border-[#444353]">
                <td className="py-3 flex items-center gap-2">
                  {/* Image Icon */}
                  <img
                    src={txn.icon}
                    alt={txn.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {txn.name}
                </td>
                <td className="py-3">{txn.date}</td>
                <td className="py-3">{txn.amount}</td>
                <td className="py-3">
                  <span className="text-[#02B15A] bg-[#1A3527] px-2 py-1 text-xs rounded-md">
                    {txn.status}
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

export default TransactionsTable;
