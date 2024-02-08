import Button from "../../../components/Button";
import useProfile from "../hooks/use-profile";

export default function SenderAction() {
  const { cancelRequest } = useProfile();
  return (
    <div>
      <Button bg="gray" onClick={cancelRequest}>
        Cancel request
      </Button>
    </div>
  );
}
