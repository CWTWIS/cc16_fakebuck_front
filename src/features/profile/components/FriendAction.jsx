import Button from "../../../components/Button";
import useProfile from "../hooks/use-profile";

export default function FriendAction() {
  const { unfriend } = useProfile();
  return (
    <div>
      <Button bg="blue" color="white" onClick={unfriend}>
        Unfriend
      </Button>
    </div>
  );
}
