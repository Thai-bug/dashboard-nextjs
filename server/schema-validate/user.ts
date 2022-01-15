import Joi from "joi";

export const validateCreateUser = Joi.object({
  fullname: Joi.string().required().messages({
    "any.required": "name is required!!",
  }),

  email: Joi.string().required().email().messages({
    "string.email": "email is invalid!!",
    "any.required": "email is required!!",
  }),

  role: Joi.object().allow(),
  
  password: Joi.required().messages({
    "any.required": "password is required",
  })
  // role: Joi.object({
  //   id: Joi.number().required().messages({
  //     "number.base": "role is invalid"
  //   })
  // }).required().messages({
  //   "any.required": "role is required",
  // })
})