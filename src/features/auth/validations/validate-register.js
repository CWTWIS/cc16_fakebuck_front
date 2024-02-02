import Joi from "joi";
import validate from "../../../utils/validate";
const registerSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "First name is required" }),
  lastName: Joi.string()
    .required()
    .trim()
    .messages({ "string.empty": "Last name is required" }),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .messages({
      "alternatives.match": "Invalid email address or mobile number",
    }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must be at least 6 characters and contains only alphabet and number",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "Confirm password is required",
      "any.only": "Password and confirm password are not match",
    }),
});

const validateRegister = (input) => validate(registerSchema)(input);

// const { value, error } = registerSchema.validate({ firstName: "" });
export default validateRegister;
