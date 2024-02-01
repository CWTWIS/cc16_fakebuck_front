import Button from "../components/Button";
import Input from "../components/Input";

export default function LoginPage() {
  return (
    <div className="m-16">
      <Input placeholder="password" />
      <Button bg="blue" color="white">
        LOG IN
      </Button>
    </div>
  );
}
