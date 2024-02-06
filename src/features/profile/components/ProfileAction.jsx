import Button from "../../../components/Button";
export default function ProfileAction() {
  return (
    <div className="flex gap-2">
      <Button bg="blue" color="white">
        Confirm request
      </Button>
      <Button bg="green" color="white">
        Delete request
      </Button>
    </div>
  );
}
