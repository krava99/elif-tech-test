import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  if (!isValidObjectId(value)) {
    return helpers.message('Invalid object ID');
  }
  return value;
};

export const shopIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    shopId: Joi.string().custom(objectIdValidator).required(),
  }),
};
