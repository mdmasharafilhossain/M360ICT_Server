import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),
  password: Joi.string().min(6).max(32).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.max": "Password must be less than 32 characters",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
});
