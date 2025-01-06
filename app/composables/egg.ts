export const useEasterEgg = () => {
	const enabled = useState("easterEgg", () => false);

	return {
		enabled
	};
};
