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
import { IconBitCoin, IconPrice, IconSearch } from "@Assets/icons/Index";
import Pagination from "@/components/Pagination/Pagination";
import ModalWithDraw from "./components/ModalWithDraw";
import Modal from "@/components/Modal/Modal";
import ModalSuccessful from "./components/ModalSuccessful";
import { useUserLayout } from "@/layouts/UserLayout";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [isAddPayment, setIsAddPayment] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isNotification, setNotification] = useState(false);
  const [isWithDraw, setIsWithDraw] = useState(false);
  const [modalSuccessful, setModalSuccessful] = useState(false);
  const userLayout = useUserLayout();
  React.useEffect(() => {
    if (location.pathname === "/profile/balance") {
      userLayout.setBreadcrumbs([
        { label: "Profile" },
        { label: "My Payment" },
      ]);
    } else {
      userLayout.setBreadcrumbs([{ label: "My Payment" }]);
    }

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout, location.pathname]);

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
    setIsWithDraw(false);
    setModalSuccessful(true);
  };

  return (
    <div id="project-payment">
      <ModalSuccessful
        open={modalSuccessful}
        clickDone={() => setModalSuccessful(false)}
        clickSkip={() => setModalSuccessful(false)}
      />
      <ModalWithDraw
        open={isWithDraw}
        clickBack={() => setIsWithDraw(false)}
        clickWithDraw={ClickWithDraw}
        onClose={() => setIsWithDraw(false)}
      />
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
          <div className="asset-list">
            <Table
              onSearching={(e) => console.log(e.target.value)}
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
          <AssetLabel name="Total Earning" value="$ 16,500" color="blue" />
          <div className="line"></div>
          <div className="address-wallet">
            <div className="icon">
              <IconBitCoin />
            </div>
            <div className="address-wallet__money">
              <span className="money">$49,329.77</span>
              <span className="title">Your address wallet</span>
            </div>
          </div>
          <div className="c-btn">
            <Button
              iconPosition="left"
              icon={<IconPrice />}
              type="white"
              onClick={() => setIsWithDraw(true)}
              className="btn-withdraw"
            >
              Withdraw
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
