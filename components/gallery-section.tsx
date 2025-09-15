import { client } from "@/sanity/lib/client";
import { GalleryImage } from "./gallery-image";

const GALLERY_IMAGES_QUERY = `*[_type == "galleryImage"] | order(_createdAt desc) {
  _id,
  image,
  altText
}`;

const options = { next: { revalidate: 30 } };

export async function GallerySection() {
	const images = await client.fetch(GALLERY_IMAGES_QUERY, {}, options);

	return <GalleryImage images={images} />;
}
