export const useConstants = () => {
	const name = "Nicola";
	const surname = "Spadari";

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
			link: "https://github.com/NicolaSpadari"
		},
		{
			icon: "i-carbon-logo-linkedin",
			id: "linkedin",
			link: "https://linkedin.com/in/nicolaspadari"
		}
	];

	return {
		name,
		surname,
		sections,
		socials
	};
};
