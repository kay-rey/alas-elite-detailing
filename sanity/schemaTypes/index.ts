import { type SchemaTypeDefinition } from "sanity";
import { serviceType } from "./service";
import { galleryImageType } from "./galleryImage";
// import { heroType } from "./hero";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [serviceType, galleryImageType], // heroType temporarily disabled
};
