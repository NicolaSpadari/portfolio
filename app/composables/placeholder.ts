export const usePlaceholder = () => {
	const genericPlaceholder = "https://via.placeholder.com/500";

	const getPlaceholder = (w: number, h = w) => {
		return `https://via.placeholder.com/${w}x${h}`;
	};

	return {
		genericPlaceholder,
		getPlaceholder
	};
};
