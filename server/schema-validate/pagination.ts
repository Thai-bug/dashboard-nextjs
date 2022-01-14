import Joi from "joi";

export const paginationValidation = Joi.object({
  skip: Joi.number().min(0).required().messages({
    "any.required": "skip is required!!",
    'number.min': `skip is invalid`,
  }),
  take: Joi.number().min(0).max(100).required().messages({
    "any.required": "take is required!!",
    'number.min': `take`,
  }),
})