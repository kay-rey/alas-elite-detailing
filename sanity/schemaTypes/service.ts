import { defineField, defineType } from "sanity";

export const serviceType = defineType({
	name: "service",
	title: "Service",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Service Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "price",
			title: "Starting Price",
			type: "number",
			validation: (rule) => rule.required().min(0),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 4,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "features",
			title: "Features",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
			validation: (rule) => rule.required().min(1),
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "price",
		},
		prepare(selection) {
			const { title, subtitle } = selection;
			return {
				title: title,
				subtitle: subtitle ? `$${subtitle}` : "No price set",
			};
		},
	},
});
