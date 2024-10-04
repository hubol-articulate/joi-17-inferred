import Joi from "joi";

export type MappedJoi<T> =
  T extends Joi.ObjectSchema<infer TObject>
    ? TObject
    : T extends Joi.StringSchema
      ? string
      : T extends Joi.NumberSchema
        ? number
        : T extends Joi.BooleanSchema
          ? boolean
          : T extends Joi.DateSchema
            ? Date
            : never;

export type MappedJoiSchema<T> = {
  [k in keyof T]: T[k] extends Joi.OptionalChained<infer TOptional>
    ? MappedJoi<TOptional> | undefined
    : MappedJoi<T[k]>;
};
