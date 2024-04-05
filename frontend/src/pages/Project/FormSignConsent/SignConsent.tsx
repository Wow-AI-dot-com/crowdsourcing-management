import InputBase from "@/components/InputBase/InputBase";
import Modal from "@/components/Modal/Modal";
import React from "react";

export interface TypeSignConsent {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function SignConsent({
  open,
  onClose,
  onSubmit,
}: TypeSignConsent) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Sign Consent"
      submitText="Send"
      onSubmit={onSubmit}
    >
      <InputBase isMultipleLine label="Sign here" />
    </Modal>
  );
}
