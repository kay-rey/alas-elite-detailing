"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { X } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";

interface GalleryImageData {
	_id: string;
	image: SanityImageSource;
	altText: string;
}

interface GalleryImageProps {
	images: GalleryImageData[];
}

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null;

export function GalleryImage({ images }: GalleryImageProps) {
	const { ref, isVisible } = useScrollAnimation(0.1);
	const [selectedImage, setSelectedImage] = useState<{
		src: string;
		alt: string;
	} | null>(null);

	const openLightbox = (image: { src: string; alt: string }) => {
		setSelectedImage(image);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<section id="gallery" className="py-16 sm:py-20 bg-background" ref={ref}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div
						className={`text-center mb-12 sm:mb-16 transition-all duration-800 ${
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
							From Grime to Shine
						</h2>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
							See the incredible transformations we achieve with every detail
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
						{images.map((image, index) => {
							const imageUrl = urlFor(image.image)
								?.width(400)
								.height(400)
								.url();
							const imageData = {
								src:
									imageUrl ||
									"/placeholder.svg?height=300&width=300&query=car detailing transformation",
								alt: image.altText,
							};

							return (
								<div
									key={image._id}
									className={`relative overflow-hidden rounded-lg group cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl aspect-square ${
										isVisible
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-8"
									}`}
									style={{
										transitionDelay: `${index * 100 + 200}ms`,
									}}
									onClick={() => openLightbox(imageData)}
								>
									<img
										src={imageData.src}
										alt={imageData.alt}
										className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
										<div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
												/>
											</svg>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{selectedImage && (
				<div
					className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
					onClick={closeLightbox}
				>
					<div className="relative max-w-4xl max-h-full">
						<button
							onClick={closeLightbox}
							className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-200 z-10"
							aria-label="Close lightbox"
						>
							<X size={32} />
						</button>
						<img
							src={selectedImage.src}
							alt={selectedImage.alt}
							className="max-w-full max-h-[80vh] object-contain rounded-lg"
							onClick={(e) => e.stopPropagation()}
						/>
						{/* <p className="text-white text-center mt-4 text-sm sm:text-base">
							{selectedImage.alt}
						</p> */}
					</div>
				</div>
			)}
		</>
	);
}
