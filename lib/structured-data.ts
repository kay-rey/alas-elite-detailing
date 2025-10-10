export const businessStructuredData = {
	"@context": "https://schema.org",
	"@type": ["AutomotiveBusiness", "LocalBusiness"],
	name: "Alas Elite Detailing",
	alternateName: "Alas Elite Mobile Detailing",
	description:
		"Premium mobile auto detailing services in Santa Clarita Valley, CA. Professional car detailing brought directly to your location. Serving Santa Clarita, Valencia, Canyon Country, Newhall, Saugus, Castaic, Stevenson Ranch, and Agua Dulce.",
	url: "https://alaselitedetailing.com",
	logo: "https://alaselitedetailing.com/images/alaslogo.jpg",
	image: "https://alaselitedetailing.com/images/alaslogo.jpg",
	telephone: "+16618551848",
	email: "Iris.alas@yahoo.com",
	founder: {
		"@type": "Person",
		name: "Marvin Alas",
	},
	address: {
		"@type": "PostalAddress",
		streetAddress: "Santa Clarita",
		addressLocality: "Santa Clarita",
		addressRegion: "CA",
		postalCode: "91350",
		addressCountry: "US",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: "34.3917",
		longitude: "-118.5426",
	},
	areaServed: [
		{
			"@type": "City",
			name: "Santa Clarita",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Valencia",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Canyon Country",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Newhall",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Saugus",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Castaic",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Stevenson Ranch",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
		{
			"@type": "City",
			name: "Agua Dulce",
			containedInPlace: {
				"@type": "State",
				name: "California",
			},
		},
	],
	serviceType: [
		"Mobile Auto Detailing",
		"Car Detailing",
		"Mobile Car Wash",
		"Paint Correction",
		"Ceramic Coating",
		"Interior Detailing",
		"Exterior Detailing",
	],
	priceRange: "$$",
	paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
	currenciesAccepted: "USD",
	openingHours: "Mo-Su 08:00-18:00",
	sameAs: ["https://www.instagram.com/alas_elite_detailing/"],
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Auto Detailing Services",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Basic Detail",
					description: "Exterior wash, interior vacuum, and basic cleaning",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Premium Detail",
					description:
						"Complete interior and exterior detailing with premium products",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Paint Correction",
					description: "Professional paint correction and polishing services",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Ceramic Coating",
					description:
						"Long-lasting ceramic coating protection for your vehicle",
				},
			},
		],
	},
	aggregateRating: {
		"@type": "AggregateRating",
		ratingValue: "5.0",
		reviewCount: "1",
		bestRating: "5",
		worstRating: "1",
	},
};

export const websiteStructuredData = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: "https://alaselitedetailing.com",
	name: "Alas Elite Detailing",
	description:
		"Premium mobile auto detailing services in Santa Clarita Valley, CA",
	potentialAction: {
		"@type": "SearchAction",
		target: "https://alaselitedetailing.com/?q={search_term_string}",
		"query-input": "required name=search_term_string",
	},
};

export const organizationStructuredData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Alas Elite Detailing",
	url: "https://alaselitedetailing.com",
	logo: "https://alaselitedetailing.com/images/alaslogo.jpg",
	founder: {
		"@type": "Person",
		name: "Marvin Alas",
	},
	contactPoint: {
		"@type": "ContactPoint",
		telephone: "+16618551848",
		contactType: "customer service",
		areaServed: ["US", "CA"],
		availableLanguage: "English",
		email: "Iris.alas@yahoo.com",
	},
	sameAs: ["https://www.instagram.com/alas_elite_detailing/"],
};
