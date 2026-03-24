import { Joi, Segments } from 'celebrate';

export const createOrderSchema = {
  [Segments.BODY]: Joi.object({
    // Валідація об'єкта користувача
    user: Joi.object({
      name: Joi.string().trim().min(2).max(50).required().messages({
        'string.min': 'Name should have at least {#limit} characters',
        'any.required': 'Name is required',
      }),
      email: Joi.string().trim().email().required().messages({
        'string.email': 'Invalid email format',
        'any.required': 'Email is required',
      }),
      phone: Joi.string()
        .pattern(/^\+?380\d{9}$/)
        .required()
        .messages({
          'string.pattern.base': 'Phone should be in the format +380XXXXXXXXX',
          'any.required': 'Phone is required',
        }),
      address: Joi.string().trim().min(10).required().messages({
        'any.required': 'Delivery address is required',
      }),
    }).required(),

    // ID магазину (має бути валідним MongoDB ObjectId)
    shopId: Joi.string().hex().length(24).required().messages({
      'string.length': 'Invalid shop ID format',
    }),

    // Масив товарів
    items: Joi.array()
      .items(
        Joi.object({
          _id: Joi.string().required(),
          name: Joi.string().required(),
          price: Joi.number().positive().required(),
          quantity: Joi.number().integer().min(1).required(),
        }),
      )
      .min(1)
      .required()
      .messages({
        'array.min': 'At least one item is required in the order',
      }),

    // Загальна сума
    totalPrice: Joi.number().positive().required().messages({
      'number.positive': 'Total price must be a positive number',
    }),
  }),
};
