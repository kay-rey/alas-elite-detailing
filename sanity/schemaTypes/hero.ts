import { defineField, defineType } from "sanity";

export const heroType = defineType({
	name: "hero",
	title: "Hero Section",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Main Heading",
			type: "string",
			validation: (rule) => rule.required().max(100),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required().max(300),
		}),
		defineField({
			name: "backgroundImage",
			title: "Background Image",
			type: "image",
			options: {
				hotspot: true,
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "imageAltText",
			title: "Image Alt Text",
			type: "string",
			description: "Alternative text for accessibility and SEO",
			validation: (rule) => rule.required().max(125),
		}),
		defineField({
			name: "primaryButtonText",
			title: "Primary Button Text",
			type: "string",
			initialValue: "Get Quote",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "secondaryButtonText",
			title: "Secondary Button Text",
			type: "string",
			initialValue: "View Gallery",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "isActive",
			title: "Active Hero",
			type: "boolean",
			description: "Only one hero should be active at a time",
			initialValue: true,
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "backgroundImage",
		},
		prepare(selection) {
			const { title, subtitle, media } = selection;
			return {
				title: title,
				subtitle: subtitle,
				media: media,
			};
		},
	},
});
