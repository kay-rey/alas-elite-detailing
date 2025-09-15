import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { serviceType } from "./service";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [postType, serviceType],
};
