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
			title: "Price",
			type: "number",
			description: "Price in dollars (e.g., 150, 250)",
			validation: (rule) => rule.required().min(0),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "features",
			title: "Features",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "list",
			},
			validation: (rule) => rule.required().min(1),
		}),
		defineField({
			name: "popular",
			title: "Popular Service",
			type: "boolean",
			description: "Mark this service as popular/featured",
			initialValue: false,
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
			description: "Order in which services appear (lower numbers first)",
			initialValue: 0,
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "price",
			popular: "popular",
		},
		prepare(selection) {
			const { title, subtitle, popular } = selection;
			return {
				title: title,
				subtitle: `$${subtitle}${popular ? " ⭐ Popular" : ""}`,
			};
		},
	},
	orderings: [
		{
			title: "Display Order",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
		{
			title: "Title A-Z",
			name: "titleAsc",
			by: [{ field: "title", direction: "asc" }],
		},
	],
});
