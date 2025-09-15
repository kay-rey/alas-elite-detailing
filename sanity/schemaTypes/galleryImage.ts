import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
	name: "galleryImage",
	title: "Gallery Image",
	type: "document",
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "altText",
			title: "Alt Text",
			type: "string",
			description: "Alternative text for accessibility and SEO",
			validation: (rule) => rule.required().max(125),
		}),
		defineField({
			name: "isVisible",
			title: "Show on Website",
			type: "boolean",
			description: "Toggle to show/hide this image on the website gallery",
			initialValue: true,
		}),
	],
	preview: {
		select: {
			title: "altText",
			media: "image",
		},
		prepare(selection) {
			const { title, media } = selection;
			return {
				title: title || "Untitled",
				media: media,
			};
		},
	},
});
