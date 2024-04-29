export const useConstants = () => {
	const name = "Nicola";
	const surname = "Spadari";
	const currentYear = new Date().getFullYear();

	const sections = [
		{
			label: "Work",
			id: "work",
			hash: "#work"
		},
		{
			label: "Writing",
			id: "writing",
			hash: "#writing"
		},
		{
			label: "About",
			id: "about",
			hash: "#about"
		},
		{
			label: "Contact",
			id: "contact",
			hash: "#contact"
		}
	];

	const socials = [
		{
			icon: "i-carbon-logo-github",
			id: "github",
			label: "GitHub",
			link: "https://github.com/NicolaSpadari"
		},
		{
			icon: "i-carbon-logo-linkedin",
			id: "linkedin",
			label: "LinkedIn",
			link: "https://linkedin.com/in/nicolaspadari"
		}
	];

	return {
		name,
		surname,
		currentYear,
		sections,
		socials
	};
};
