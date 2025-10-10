import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt =
	"Alas Elite Detailing - Premium Mobile Auto Detailing in Santa Clarita Valley, CA";
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
						position: "relative",
					}}
				>
					{/* Background Pattern */}
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background:
								"radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
						}}
					/>

					{/* Logo */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "40px",
						}}
					>
						<img
							src={logoSrc}
							alt="Alas Elite Detailing"
							style={{
								width: "200px",
								height: "200px",
								objectFit: "contain",
								borderRadius: "20px",
							}}
						/>
					</div>

					{/* Business Name */}
					<div
						style={{
							fontSize: "64px",
							fontWeight: "bold",
							color: "#FFFFFF",
							textAlign: "center",
							marginBottom: "20px",
							textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
						}}
					>
						Alas Elite Detailing
					</div>

					{/* Tagline */}
					<div
						style={{
							fontSize: "32px",
							fontWeight: "600",
							color: "#3B82F6",
							textAlign: "center",
							marginBottom: "16px",
						}}
					>
						Mobile Auto Detailing
					</div>

					{/* Service Area */}
					<div
						style={{
							fontSize: "24px",
							fontWeight: "400",
							color: "#E5E7EB",
							textAlign: "center",
							opacity: 0.9,
						}}
					>
						Santa Clarita Valley, CA
					</div>

					{/* Contact Info */}
					<div
						style={{
							position: "absolute",
							bottom: "40px",
							right: "40px",
							fontSize: "20px",
							fontWeight: "500",
							color: "#3B82F6",
						}}
					>
						(661) 855-1848
					</div>
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
						position: "relative",
					}}
				>
					{/* Background Pattern */}
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background:
								"radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
						}}
					/>

					{/* Business Name */}
					<div
						style={{
							fontSize: "64px",
							fontWeight: "bold",
							color: "#FFFFFF",
							textAlign: "center",
							marginBottom: "20px",
							textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
						}}
					>
						Alas Elite Detailing
					</div>

					{/* Tagline */}
					<div
						style={{
							fontSize: "32px",
							fontWeight: "600",
							color: "#3B82F6",
							textAlign: "center",
							marginBottom: "16px",
						}}
					>
						Mobile Auto Detailing
					</div>

					{/* Service Area */}
					<div
						style={{
							fontSize: "24px",
							fontWeight: "400",
							color: "#E5E7EB",
							textAlign: "center",
							opacity: 0.9,
						}}
					>
						Santa Clarita Valley, CA
					</div>

					{/* Contact Info */}
					<div
						style={{
							position: "absolute",
							bottom: "40px",
							right: "40px",
							fontSize: "20px",
							fontWeight: "500",
							color: "#3B82F6",
						}}
					>
						(661) 855-1848
					</div>
				</div>
			),
			{
				...size,
			}
		);
	}
}
