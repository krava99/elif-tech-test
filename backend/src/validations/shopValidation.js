import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

// Кастомний валідатор для перевірки MongoDB ObjectId
const objectIdValidator = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message('Невалідний формат ID');
  }
  return value;
};

// Валідація параметра shopId в URL
export const shopIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    shopId: Joi.string().custom(objectIdValidator).required(),
  }),
};
