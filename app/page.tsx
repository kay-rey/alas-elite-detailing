export default function HomePage() {
	return (
		<div className="min-h-screen bg-background flex items-center justify-center">
			<div className="text-center">
				{/* Large X */}
				<div className="text-9xl md:text-[12rem] font-bold text-red-500 mb-8">
					X
				</div>

				{/* Unavailable Text */}
				<div className="text-2xl md:text-4xl font-medium text-muted-foreground">
					Unavailable
				</div>
			</div>
		</div>
	);
}
