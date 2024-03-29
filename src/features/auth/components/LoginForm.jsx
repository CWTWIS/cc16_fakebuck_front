import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import validateLogin from "../validations/validate-login";
import useAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [input, setInput] = useState({ emailOrMobile: "", password: "" });
  const [error, setError] = useState({});

  const { login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }
      await login(input);
      toast.success("login successfully");
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-4">
        <div>
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
            errorMessage={error.emailOrMobile}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            errorMessage={error.password}
          />
        </div>
        <Button bg="blue" color="white">
          Login
        </Button>
      </div>
    </form>
  );
}
