export default defineAppConfig({
	user: {
		name: "Nicola",
		surname: "Spadari",
		email: "spadari.nicola@gmail.com"
	},
	socials: {
		github: {
			icon: "carbon:logo-github",
			id: "github",
			label: "GitHub",
			link: "https://github.com/NicolaSpadari"
		},
		linkedin: {
			icon: "carbon:logo-linkedin",
			id: "linkedin",
			label: "LinkedIn",
			link: "https://linkedin.com/in/nicolaspadari"
		}
	},
	currentYear: new Date().getFullYear(),
	upToDesktopMediaQuery: "(min-width: 992px)"
});
