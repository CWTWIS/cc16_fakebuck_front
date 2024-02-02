import Joi from "joi";
import validate from "../../../utils/validate";
const registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

const validateRegister = (input) => validate(registerSchema)(input);

// const { value, error } = registerSchema.validate({ firstName: "" });
export default validateRegister;
