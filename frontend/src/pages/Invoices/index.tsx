import React, { useState } from "react";
import "./index.scss";
import Table from "@/components/Table/Table";
import Button from "@/components/Button/Button";
import IconPlusEmailTemplate from "@/assets/icons/IconPlusEmailTemplate";
import ModalInvoices from "./components/ModalInvoices";

const FAKE_DATA = [
  {
    jobId: "8331",
    client: "Brain Dayley",
    invoiceId: "123456789",
    date: "Oct 23, 2023",
    time: "11 days ago",
    attachedInvoice: "Download Attached Invoice",
    status: "Done",
  },
  {
    jobId: "8331",
    client: "Brain Dayley",
    invoiceId: "123456789",
    date: "Oct 23, 2023",
    time: "11 days ago",
    attachedInvoice: "Download Attached Invoice",
    status: "Fail",
  },
  {
    jobId: "8331",
    client: "Brain Dayley",
    invoiceId: "123456789",
    date: "Oct 23, 2023",
    time: "11 days ago",
    attachedInvoice: "Download Attached Invoice",
    status: "Pending",
  },
];

const columns = [
  { align: "LEFT", label: "Job ID", dataKey: "jobId" },
  { align: "LEFT", label: "Client", dataKey: "client" },
  {
    align: "LEFT",
    label: "Invoice ID",
    dataKey: "invoiceId",
  },
  {
    align: "LEFT",
    label: "Due date",
    dataKey: "dueDate",
    renderer: (dataRow: any) => (
      <div>
        <div className="table-date">{dataRow.date}</div>
        <div className="table-time">{dataRow.time}</div>
      </div>
    ),
  },
  {
    align: "LEFT",
    label: "Attached Invoice",
    dataKey: "attachedInvoice",
    renderer: (dataRow: any) => (
      <a href="/" className="table-attached-invoice">
        {dataRow.attachedInvoice}
      </a>
    ),
  },
  {
    align: "LEFT",
    label: "Status",
    dataKey: "status",
    renderer: (dataRow: any) => (
      <div className={dataRow.status.toLowerCase()}>{dataRow.status}</div>
    ),
  },
];
const Invoices = () => {
  const [modalInvoices, setModalInvoices] = useState(false);
  const modalInvoicesSubmit = () => {
    console.log("object");
  };
  return (
    <div id="invoices">
      <ModalInvoices
        open={modalInvoices}
        submit={modalInvoicesSubmit}
        close={() => setModalInvoices(false)}
      />
      <div className="c-invoices-btn">
        <Button
          type="secondary"
          iconPosition="right"
          icon={<IconPlusEmailTemplate />}
          className="btn-invoices"
          onClick={() => setModalInvoices(true)}
        >
          Add invoices
        </Button>
      </div>
      <Table columns={columns as any} data={FAKE_DATA}></Table>
    </div>
  );
};

export default Invoices;
