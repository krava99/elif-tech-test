import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message('Unvalid format ID');
  }
  return value;
};

export const getProductsByShopSchema = {
  [Segments.PARAMS]: Joi.object({
    shopId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createProductSchema = {
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
      'string.empty': 'Product name cannot be empty',
    }),
    price: Joi.number().min(0).required().messages({
      'number.base': 'Price must be a number',
    }),
    category: Joi.string().required(),
    shopId: Joi.string().custom(objectIdValidator).required().messages({
      'any.custom': 'Shop ID must be a valid ObjectId',
    }),
  }),
};
