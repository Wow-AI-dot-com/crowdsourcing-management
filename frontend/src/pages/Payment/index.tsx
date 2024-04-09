import React, { useState } from "react";
import "./index.scss";
import Table from "@Components/Table/Table";
import AssetLabel from "../Project/AssetLabel";
import ItemPaymentMethod from "./ItemPaymentMethod";
import IconPlus from "@/assets/icons/IconPlus";
import IconDebit from "@/assets/icons/IconDebit";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";
import AddPayment from "../Project/FormAddPayment/AddPayment";
import ConfirmModal from "@/components/Modal/ConfirmModal";
import Notification from "./Notification";
import { IconSearch } from "@Assets/icons/Index";
import Pagination from "@/components/Pagination/Pagination";

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
  const [isAddPayment, setIsAddPayment] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isNotification, setNotification] = useState(false);

  const onClickNote = () => {
    console.log("object");
  };
  const onClickTrash = () => {
    setIsConfirm(true);
  };
  const onClickAddPayment = () => {
    setIsAddPayment(true);
  };
  const submitAddPayment = () => {
    console.log("object");
  };
  const removeConfirm = () => {
    console.log("object");
  };
  const ClickWithDraw = () => {
    setNotification(true);
  };

  return (
    <div id="project-payment">
      <Notification
        price={"asd"}
        open={isNotification}
        onClickClose={() => setNotification(false)}
      />
      <ConfirmModal
        open={isConfirm}
        onClose={() => setIsConfirm(false)}
        onClickCancel={() => setIsConfirm(false)}
        onClickRemove={removeConfirm}
        title="Are you certain you want to delete this payment method?"
      />
      <AddPayment
        open={isAddPayment}
        onClose={() => setIsAddPayment(false)}
        onSubmit={submitAddPayment}
      />
      <div className="project-payment-container">
        <div className="left">
          <div className="asset-label">
            <AssetLabel name="Total Earning" value="$ 16,500" color="blue" />
            <AssetLabel name="Invoices" value="$ 16,500" color="pink" />
            <AssetLabel name="Balence" value="$ 16,500" color="purple" />
          </div>
          <div className="asset-list">
            <div className="wrap-search-input">
              <div className="search-asset-input">
                <IconSearch />
                <input placeholder="Search asset" />
              </div>
            </div>
            <Table
              columns={columns as any}
              data={FAKE_DATA}
              selected={selectedRow}
              onSelect={(data) => setSelectedRow(data)}
            />
            <div className="pagination-bottom">
              <Pagination
                page={1}
                pageSize={20}
                total={100}
                setPage={() => null}
                target={"projects"}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right__title">Payment method</div>
          <div className="right__list-item-payment">
            <ItemPaymentMethod
              bankName="CHASE"
              bankNumber={12049828300}
              onClickNote={onClickNote}
              onClickTrash={onClickTrash}
            />
          </div>
          <div className="right__add-payment" onClick={onClickAddPayment}>
            <IconPlus />
            <span>Add new payment</span>
          </div>
          <div className="right__withdraw">
            <div className="right__withdraw-title">Withdraw</div>
            <div className="right__withdraw-debit">
              <div className="right__withdraw-debit-title">
                <IconDebit />
                <span>Debit</span>
              </div>
              <div className="right__withdraw-debit-money">
                <span className="right__withdraw-debit-money-label">
                  $ 10,680
                </span>
                <Dropdown></Dropdown>
              </div>
            </div>
            <div className="right__withdraw-amount">
              <div className="right__withdraw-amount-information">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&s"
                  alt=""
                />
                <span>Enter the amount</span>
              </div>
              <div className="right__withdraw-amount-money">$ 800.00</div>
            </div>
            <Button onClick={ClickWithDraw}>
              <div className="right-btn">WithDraw</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
