import Joi from "joi";

const joiSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
  email: Joi.string().email().optional(),
  birthDate: Joi.date(),
  nested: Joi.object({
    key1: Joi.string(),
  }),
});

const test = async () => {
  const obj = await joiSchema.validateAsync("asdf");
  const str: string = obj.nested.key1;

  obj.email.length === 0;
};
