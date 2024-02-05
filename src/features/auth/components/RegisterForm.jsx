import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validations/validate-register";
import useAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";

const initial = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial); //{firstName : 'aaa'}
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }
      await register(input);
      toast.success("register successfully");
      onSuccess();
    } catch (err) {
      if (err.response?.data.message === "EMAIL_MOBILE_IN_USE") {
        return setError({
          emailOrMobile: "email address or mobile number already in use",
        });
      }
      toast.error("Internal server error");
    }
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // setError({});
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 p-4 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            errorMessage={error.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            errorMessage={error.lastName}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
            errorMessage={error.emailOrMobile}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            value={input.password}
            type="password"
            name="password"
            onChange={handleChangeInput}
            errorMessage={error.password}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            value={input.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={handleChangeInput}
            errorMessage={error.confirmPassword}
          />
        </div>
        <div className="col-span-full text-center">
          <Button bg="green" color="white">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}
