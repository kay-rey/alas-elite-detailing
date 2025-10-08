import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt =
	"Alas Elite Detailing - Premium Mobile Auto Detailing in Santa Clarita, CA";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
	try {
		// Try to load the logo
		const logoData = await readFile(
			join(process.cwd(), "public/images/alaslogo.jpg"),
			"base64"
		);
		const logoSrc = `data:image/jpeg;base64,${logoData}`;

		return new ImageResponse(
			(
				<div
					style={{
						background: "#000000",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* Logo */}
					<img
						src={logoSrc}
						alt="Alas Elite Detailing"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
						}}
					/>
				</div>
			),
			{
				...size,
			}
		);
	} catch (error) {
		// Fallback if logo can't be loaded
		return new ImageResponse(
			(
				<div
					style={{
						background: "#000000",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							fontSize: "48px",
							fontWeight: "bold",
							color: "#3B82F6",
							textAlign: "center",
						}}
					>
						Alas Elite Detailing
					</div>
				</div>
			),
			{
				...size,
			}
		);
	}
}
