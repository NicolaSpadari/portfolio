export const useMenu = () => {
	const open = useState("menu", () => false);

	return {
		open
	};
};
