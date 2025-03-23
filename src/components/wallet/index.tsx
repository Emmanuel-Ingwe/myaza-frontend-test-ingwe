import React from "react";
import Balance from "@/components/wallet/balance";
import Transactions2 from "@/components/wallet/transactions2";

const index = () => {
  return (
    <section className="mt-[100px]">
      <div className="mb-9 text-[#C1C1C1] font-medium">
        Manage all your wallets from here
      </div>
      <div className="">
        <Balance />
        <Transactions2 />
      </div>
    </section>
  );
};

export default index;
