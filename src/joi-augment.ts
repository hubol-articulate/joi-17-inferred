import { MappedJoiSchema } from "./mapped-joi";

declare module "joi" {
  type OptionalChained<T> = T & { readonly __optionalChained: unique symbol };

  interface AnySchema<TSchema = any> {
    optional(): OptionalChained<this>;
  }

  interface Root {
    object<TSchema extends Record<string, AnySchema>>(
      schema: TSchema,
    ): ObjectSchema<MappedJoiSchema<TSchema>>;
  }
}

export default 0;
