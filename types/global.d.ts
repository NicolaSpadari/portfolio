declare interface Project {
	id: string
	title: string
	description: string
	image: string
	link: string
}

declare interface Experience {
	id: string
	name: string
	details: string[]
	date: string
	current: boolean
}

declare interface Competence {
	id: string
	title: string
	description: string
	image: string
}
