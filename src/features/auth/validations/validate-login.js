import Joi from "joi";
import validate from "../../../utils/validate";

const loginSchema = Joi.object({
  emailOrMobile: Joi.string().required().messages({
    "string.empty": "email address or mobile number is required",
    "any.required": "email address or mobile number is required",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);
export default validateLogin;
