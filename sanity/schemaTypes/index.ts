import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { serviceType } from "./service";
import { galleryImageType } from "./galleryImage";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [postType, serviceType, galleryImageType],
};
