export default [
	{
		online: true,
		title: "projetos",
		path: "/projects",
		submenu: []
	},
	{
		online: true,
		title: "categorias",
		path: "/category",
		submenu: [
			{
				title: "farms",
				path: "/projects?category=farms",
			},
			{
				title: "construção",
				path: "/projects?category=construction",
			},
		]
	},

	{
		online: false,
		title: "loja",
		path: "/shop",
		submenu: []
	}
]  
