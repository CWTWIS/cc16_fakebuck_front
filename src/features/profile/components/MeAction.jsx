import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import EditProfileForm from "./EditProfileForm";
export default function MeAction() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button bg="gray" onClick={() => setOpen(true)}>
        Edit profile
      </Button>
      {open && (
        <Modal title="edit profile" width={44} onClose={() => setOpen(false)}>
          <EditProfileForm />
        </Modal>
      )}
    </div>
  );
}
