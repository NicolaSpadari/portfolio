export const useConstants = () => {
	const name = "Nicola";
	const surname = "Spadari";
	const email = "spadari.nicola@gmail.com";
	const github = "https://github.com/NicolaSpadari";
	const linkedin = "https://linkedin.com/in/nicolaspadari";
	const currentYear = new Date().getFullYear();

	const socials = [
		{
			icon: "i-carbon-logo-github",
			id: "github",
			label: "GitHub",
			link: github
		},
		{
			icon: "i-carbon-logo-linkedin",
			id: "linkedin",
			label: "LinkedIn",
			link: linkedin
		}
	];

	const upToDesktop = "(min-width: 992px)";

	return {
		name,
		surname,
		email,
		github,
		linkedin,
		currentYear,
		socials,
		upToDesktop
	};
};
