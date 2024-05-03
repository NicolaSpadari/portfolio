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
	date_to?: string
	order: number
	current: boolean
}

declare interface Competence {
	id: string
	title: string
	description: string
	image: string
}
