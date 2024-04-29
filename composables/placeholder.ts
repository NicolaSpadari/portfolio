export const usePlaceholder = () => {
	const generic = "https://via.placeholder/500";

	const getPlaceholder = (w: number, h = w) => {
		return `https://via.placeholder.com/${w}x${h}`;
	};

	return {
		generic,
		getPlaceholder
	};
};
