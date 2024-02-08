import Button from "../../../components/Button";
import useProfile from "../hooks/use-profile";

export default function ReceiverAction() {
  const { confirmRequest, rejectRequest } = useProfile();
  return (
    <div className="flex gap-2">
      <Button bg="blue" color="white" onClick={confirmRequest}>
        Confirm request
      </Button>
      <Button bg="gray" onClick={rejectRequest}>
        Delete request
      </Button>
    </div>
  );
}
