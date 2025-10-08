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
						background: "linear-gradient(135deg, #0F0F0F 0%, #1a1a1a 100%)",
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "60px",
						position: "relative",
					}}
				>
					{/* Logo */}
					<img
						src={logoSrc}
						alt="Alas Elite Detailing"
						style={{
							width: "200px",
							height: "200px",
							objectFit: "contain",
							marginBottom: "40px",
						}}
					/>

					{/* Main Title */}
					<div
						style={{
							fontSize: "64px",
							fontWeight: "bold",
							color: "#ffffff",
							textAlign: "center",
							marginBottom: "20px",
							lineHeight: 1.1,
						}}
					>
						Alas Elite Detailing
					</div>

					{/* Subtitle */}
					<div
						style={{
							fontSize: "32px",
							color: "#3B82F6",
							textAlign: "center",
							marginBottom: "20px",
							fontWeight: "600",
						}}
					>
						Premium Mobile Auto Detailing
					</div>

					{/* Location */}
					<div
						style={{
							fontSize: "24px",
							color: "#9CA3AF",
							textAlign: "center",
						}}
					>
						Santa Clarita, CA
					</div>

					{/* Accent line */}
					<div
						style={{
							position: "absolute",
							bottom: "0",
							left: "0",
							right: "0",
							height: "8px",
							background: "linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%)",
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
						background: "linear-gradient(135deg, #0F0F0F 0%, #1a1a1a 100%)",
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "60px",
					}}
				>
					<div
						style={{
							fontSize: "64px",
							fontWeight: "bold",
							color: "#ffffff",
							textAlign: "center",
							marginBottom: "20px",
						}}
					>
						Alas Elite Detailing
					</div>
					<div
						style={{
							fontSize: "32px",
							color: "#3B82F6",
							textAlign: "center",
							marginBottom: "20px",
						}}
					>
						Premium Mobile Auto Detailing
					</div>
					<div
						style={{
							fontSize: "24px",
							color: "#9CA3AF",
							textAlign: "center",
						}}
					>
						Santa Clarita, CA
					</div>
				</div>
			),
			{
				...size,
			}
		);
	}
}
