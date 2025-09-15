import { type SchemaTypeDefinition } from "sanity";
import { serviceType } from "./service";
import { galleryImageType } from "./galleryImage";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [serviceType, galleryImageType],
};
