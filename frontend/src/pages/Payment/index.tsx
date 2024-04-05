import React, { useState } from "react";
import "./index.scss";
import Table from "@Components/Table/Table";

const FAKE_DATA = [
  {
    id: "8331",
    amount: 1000,
    status: "completed",
    bankNumber: "123456789",
    bankName: "Bank of America",
    method: "Bank",
  },
  {
    id: "105421",
    amount: 1000,
    status: "pending",
    bankNumber: "123456789",
    bankName: "Bank of America",
    method: "Bank",
  },
];

const columns = [
  { align: "CENTER", label: "ID", dataKey: "id" },
  { align: "CENTER", label: "Method", dataKey: "method" },
  {
    align: "CENTER",
    label: "Number of bank",
    dataKey: "bankAccount",
    renderer: (dataRow: any) => (
      <div>
        <div>{dataRow.bankNumber}</div>
        <div>{dataRow.bankName}</div>
      </div>
    ),
  },
  {
    align: "RIGHT",
    label: "Amount",
    dataKey: "amount",
    renderer: (dataRow: any) => (
      <div>
        <div>${dataRow.amount}</div>
      </div>
    ),
  },
  {
    align: "CENTER",
    label: "Status",
    dataKey: "status",
    renderer: (dataRow: any) => (
      <div>
        <div>{dataRow.status}</div>
      </div>
    ),
  },
];

const Payment = () => {
  const [selectedRow, setSelectedRow] = useState<string[]>([]);

  return (
    <div id="project-payment">
      <div className="project-payment-container">
        <div className="left">
          <div>asset Labels</div>
          <div className="asset-list">
            <Table
              columns={columns as any}
              data={FAKE_DATA}
              selected={selectedRow}
              onSelect={(data) => setSelectedRow(data)}
            />
          </div>
        </div>
        <div className="right">
          <div>Payment method</div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
