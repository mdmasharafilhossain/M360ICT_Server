import Joi from "joi";
export const createEmployeeSchema = Joi.object({
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
    }),

  age: Joi.number()
    .integer()
    .min(18)
    .max(65)
    .required()
    .messages({
      "number.base": "Age must be a number",
      "number.min": "Age must be at least 18",
      "number.max": "Age must be below 65",
    }),

  designation: Joi.string()
    .min(2)
    .max(40)
    .required()
    .messages({
      "string.empty": "Designation is required",
      "string.max": "Designation must be less than 40 characters",
    }),

  hiring_date: Joi.date()
  .iso()
    .max("now")
    
    .required()
    .messages({
      "date.max": "Hiring date cannot be in the future",
      "date.base": "Invalid hiring date",
    }),

  date_of_birth: Joi.date()
  .iso()
    .max("now")
    
    .required()
    .messages({
      "date.max": "Date of birth cannot be in the future",
      "date.base": "Invalid date of birth",
    }),
     photo_path: Joi.string()
    .optional()
    .allow(null, ""),

  salary: Joi.number()
    .min(10000)
    .max(1000000)
    .precision(2)
    .required()
    .messages({
      "number.min": "Salary must be at least 10,000",
      "number.max": "Salary must be less than 1,000,000",
    }),
   
}).unknown(false); 



export const updateEmployeeSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .pattern(/^[a-zA-Z\s]+$/),

  age: Joi.number()
    .integer()
    .min(18)
    .max(65),

  designation: Joi.string()
    .min(2)
    .max(40),

  hiring_date: Joi.date()
  .iso()
    .max("now"),

  date_of_birth: Joi.date()
  .iso()
    .max("now"),
 photo_path: Joi.string()
    .optional()
    .allow(null, ""),
  salary: Joi.number()
    .min(10000)
    .max(1000000)
    .precision(2),
})
  .min(1)
  .unknown(false);
