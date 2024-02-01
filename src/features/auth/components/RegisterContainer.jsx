import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

export default function RegisterContainer() {
  return (
    <>
      <div className="text-center">
        <Button bg="green" color="white">
          Create new account
        </Button>
      </div>
      <Modal />
    </>
  );
}
