import {
  IconMessageCrowdPool,
  IconNationCrowdPool,
  IconSearch,
} from "@/assets/icons/Index";
import Checkbox from "@/components/Checkbox/Checkbox";
import Dropdown from "@/components/Dropdown/Dropdown";
import React, { ChangeEvent, useState } from "react";
import ItemProjectCrowdPool from "./ItemProjectCrowdPool";
import Pagination from "@/components/Pagination/Pagination";
import "./CrowdPool.scss";
import ModalInviteCrowdPool from "./components/ModalInviteCrowdPool";
import Table from "@/components/Table/Table";
import { useUserLayout } from "@/layouts/UserLayout";

const FAKE_DATA = [
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
  {
    name: "Cristita Michael",
    location: "Viet Nam",
    email: "cristitamichael@gmail.com",
    language1: "Vietnamese",
    language2: "English",
    experience: "Project Manager",
  },
];

const columns = [
  {
    align: "LEFT",
    label: "Name",
    dataKey: "name",
  },
  { align: "LEFT", label: "Email", dataKey: "email" },
  { align: "LEFT", label: "Location", dataKey: "location" },
  { align: "LEFT", label: " Language 1", dataKey: "language1" },
  { align: "LEFT", label: " Language 2", dataKey: "language2" },
  {
    align: "LEFT",
    label: "Experience",
    dataKey: "experience",
    renderer: (dataRow: any) => (
      <div className="role-col">{dataRow.experience}</div>
    ),
  },
];

export default function CrowdPool() {
  const userLayout = useUserLayout();
  React.useEffect(() => {
    userLayout.setBreadcrumbs([{ label: "Crowd Pool" }]);

    return () => {
      userLayout.clearBreadcrumbs();
    };
  }, [userLayout]);
  return (
    <div className="c-pool">
      <Table columns={columns as any} data={FAKE_DATA} className="table" />
    </div>
  );
}
