export const useConstants = () => {
	const name = "Nicola";
	const surname = "Spadari";
	const email = "spadari.nicola@gmail.com";
	const currentYear = new Date().getFullYear();
	const companyWebsite = "https://bitbull.it";
	const prevCompanyWebsite = "https://bitbull.it";
	const experienceYears = currentYear - 2018;

	const sections = [
		{
			label: "Projects",
			id: "projects",
			hash: "#projects"
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

	const upToDesktop = "(min-width: 992px)";

	return {
		name,
		surname,
		email,
		currentYear,
		sections,
		socials,
		upToDesktop,
		companyWebsite,
		prevCompanyWebsite,
		experienceYears
	};
};
