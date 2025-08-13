import Link from "next/link";

const mockUrls = [
	"https://2t67fvxof1.ufs.sh/f/T0zhpslsjQgB9xFBireGZlFdoU8bR3C621SmLND40rhPjHqB",
	"https://2t67fvxof1.ufs.sh/f/T0zhpslsjQgBIBjsjSU6JvrXLTsmzGEcV10WROQHxCS4ZgoU",
	"https://2t67fvxof1.ufs.sh/f/T0zhpslsjQgBPkZqQR8JE8yDKgnO54Bd1XMGNYvSIlcfmis7",
];

const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url,
}));

export default function HomePage() {
	return (
		<main className="">
			<div className="flex flex-wrap gap-4">
				{mockImages.map((image) => (
					<div key={image.id} className="w-48 p-4">
						<img src={image.url} />
					</div>
				))}
			</div>
		</main>
	);
}
