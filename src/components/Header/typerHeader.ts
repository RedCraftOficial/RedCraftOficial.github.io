type SubmenuItem = {
	title: string
	path: string
}

export type LinkItem = {
	online: boolean
	title: string
	path: string
	submenu: SubmenuItem[]
}
