import { client } from "@/sanity/lib/client";
import { ServicesDisplay } from "./services-display";

const SERVICES_QUERY = `*[_type == "service" && isVisible == true] | order(order asc)[0...3] {
  _id,
  title,
  price,
  description,
  features,
  popular
}`;

const options = { next: { revalidate: 30 } };

export async function ServicesData() {
	const services = await client.fetch(SERVICES_QUERY, {}, options);

	return <ServicesDisplay services={services} />;
}
