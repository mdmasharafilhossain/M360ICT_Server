import Joi from "joi";

export const attendanceSchema = Joi.object({
  employee_id: Joi.number().integer().positive().required().messages({
    "number.base": "Employee ID must be a number",
    "number.integer": "Employee ID must be an integer",
    "number.positive": "Employee ID must be a positive number",
    "any.required": "Employee ID is required",
  }),

  date: Joi.date().max("now").required().messages({
    "date.base": "Invalid date format",
    "date.max": "Date cannot be in the future",
    "any.required": "Date is required",
  }),

  check_in_time: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required()
    .messages({
      "string.pattern.base": "Check-in time must be in HH:mm format (24-hour)",
      "string.empty": "Check-in time is required",
      "any.required": "Check-in time is required",
    }),
});
