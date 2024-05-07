declare interface AboutStoryblok {
	title: string
	text: string
	content?: AboutParagraphStoryblok[]
	linkable?: boolean
	component: "about"
	_uid: string
	[k: string]: any
}

declare interface RichtextStoryblok {
	type: string
	content?: RichtextStoryblok[]
	marks?: RichtextStoryblok[]
	attrs?: any
	text?: string
	[k: string]: any
}

declare interface AboutParagraphStoryblok {
	text?: RichtextStoryblok
	component: "about_paragraph"
	_uid: string
	[k: string]: any
}

declare interface ExperienceStoryblok {
	name: string
	text: string
	from: string
	to?: string
	current?: boolean
	component: "experience"
	_uid: string
	[k: string]: any
}

declare interface AssetStoryblok {
	alt?: string
	copyright?: string
	id: number
	filename: string
	name: string
	title?: string
	focus?: string
	[k: string]: any
}

declare interface ExperiencesStoryblok {
	title?: string
	content?: ExperienceStoryblok[]
	attachment: AssetStoryblok
	linkable?: boolean
	component: "experiences"
	_uid: string
	[k: string]: any
}

declare interface HeroStoryblok {
	content?: HeroLineStoryblok[]
	component: "hero"
	_uid: string
	[k: string]: any
}

declare interface HeroLineStoryblok {
	text?: string
	component: "hero_line"
	_uid: string
	[k: string]: any
}

declare interface IntroStoryblok {
	text?: IntroParagraphStoryblok[]
	component: "intro"
	_uid: string
	[k: string]: any
}

declare interface IntroParagraphStoryblok {
	text?: RichtextStoryblok
	component: "intro_paragraph"
	_uid: string
	[k: string]: any
}

declare interface PageStoryblok {
	body?: (
		| AboutStoryblok
		| AboutParagraphStoryblok
		| ExperienceStoryblok
		| ExperiencesStoryblok
		| HeroStoryblok
		| HeroLineStoryblok
		| IntroStoryblok
		| IntroParagraphStoryblok
		| PageStoryblok
		| PhotoStoryblok
		| SkillStoryblok
		| SkillsStoryblok
		| WorkStoryblok
		| WorksStoryblok
	)[]
	component: "page"
	_uid: string
	[k: string]: any
}

declare interface PhotoStoryblok {
	image: AssetStoryblok
	component: "photo"
	_uid: string
	[k: string]: any
}

declare interface SkillStoryblok {
	name: string
	image: AssetStoryblok
	component: "skill"
	_uid: string
	[k: string]: any
}

declare interface SkillsStoryblok {
	title: string
	content?: SkillStoryblok[]
	linkable?: boolean
	component: "skills"
	_uid: string
	[k: string]: any
}

declare type MultilinkStoryblok =
	| {
  	id?: string
  	cached_url?: string
  	anchor?: string
  	linktype?: "story"
  	target?: "_self" | "_blank"
  	story?: {
  		name: string
  		created_at?: string
  		published_at?: string
  		id: number
  		uuid: string
  		content?: {
  			[k: string]: any
  		}
  		slug: string
  		full_slug: string
  		sort_by_date?: null | string
  		position?: number
  		tag_list?: string[]
  		is_startpage?: boolean
  		parent_id?: null | number
  		meta_data?: null | {
  			[k: string]: any
  		}
  		group_id?: string
  		first_published_at?: string
  		release_id?: null | number
  		lang?: string
  		path?: null | string
  		alternates?: any[]
  		default_full_slug?: null | string
  		translated_slugs?: null | any[]
  		[k: string]: any
  	}
  	[k: string]: any
	}
	| {
  	url?: string
  	cached_url?: string
  	anchor?: string
  	linktype?: "asset" | "url"
  	target?: "_self" | "_blank"
  	[k: string]: any
	}
	| {
  	email?: string
  	linktype?: "email"
  	target?: "_self" | "_blank"
  	[k: string]: any
	};

declare interface WorkStoryblok {
	name: string
	link: Exclude<MultilinkStoryblok, { linktype?: "email" } | { linktype?: "asset" }>
	component: "work"
	_uid: string
	[k: string]: any
}

declare interface WorksStoryblok {
	title: string
	content?: WorkStoryblok[]
	linkable?: boolean
	component: "works"
	_uid: string
	[k: string]: any
}
