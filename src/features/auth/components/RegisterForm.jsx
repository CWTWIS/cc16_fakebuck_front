import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import registerSchema from "../validations/validate-register";
import ErrorMessage from "../../../components/ErrorMessage";

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState({}); //{firstName : 'aaa'}
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { value, error } = registerSchema.validate(input, {
      abortEarly: false,
    });
    // console.log(error);
    if (error) {
      const submitError = {};
      console.log(error.details);
      error.details.forEach((detail) => {
        const key = detail.path[0];
        submitError[key] = detail.message;
      });
      setError((prev) => ({ ...prev, ...submitError }));
    } else {
      setError({
        firstName: "",
        lastName: "",
        emailOrMobile: "",
        password: "",
        confirmPassword: "",
      });
      onSuccess();
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
          />
          <ErrorMessage error={error.firstName}></ErrorMessage>
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
          />
          <ErrorMessage error={error.lastName}></ErrorMessage>
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
          />
          <ErrorMessage error={error.emailOrMobile}></ErrorMessage>
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            value={input.password}
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
          <ErrorMessage error={error.password}></ErrorMessage>
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            value={input.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={handleChangeInput}
          />
          <ErrorMessage error={error.confirmPassword}></ErrorMessage>
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
