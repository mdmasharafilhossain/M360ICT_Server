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
  password: Joi.string()
    .min(6)
    .max(32)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must be less than 32 characters",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
});
export const registerSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      "string.min": "Name must be at least 3 characters",
      "string.max": "Name must be less than 50 characters",
      "string.pattern.base": "Name can only contain letters and spaces",
      "string.empty": "Name is required",
      "any.required": "Name is required",
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .min(8)
    .max(32)
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must be less than 32 characters",
      "string.pattern.base":
        "Password must contain uppercase, lowercase, and a number",
      "string.empty": "Password is required",
      "any.required": "Password is required",
    }),
})
  .unknown(false);