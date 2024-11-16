import { Link } from "react-router-dom"
import arrowSVG from "../../assets/icons/arrow.svg"

import { LinkItem } from "./typerHeader"

export const MenuSite = ({
	viewSubmenu,
	setViewSubmenu,
	listMenu,
}: {
	viewSubmenu: string
	setViewSubmenu: (s: string) => void
	listMenu: LinkItem[]
}) => {
	return <ul
		className="flex gap-5 items-center text-sm"
	>
		{listMenu
			.filter((f: LinkItem) => f.online)
			.map(({ title, path, submenu }: LinkItem) => (
				<li
					className={`text-white`}
					key={path}
				>
					{submenu.length > 0 ?
						<div className="relative">
							<div
								className="flex gap-1 items-center hover:text-[#86D562] cursor-pointer font-bold uppercase"
								onClick={_ => setViewSubmenu(viewSubmenu == path ? "" : path)}
							>
								{title}
								<img
									className={`w-4 h-4 ${viewSubmenu === path ? "rotate-180" : ""}`}
									src={arrowSVG}
								/>
							</div>
							{viewSubmenu === path
								? <ul className="absolute flex flex-col p-2 bg-[#262423]">
									{submenu.map(sm =>
										<li
											key={sm.path}
											className="border-b-2 border-[#3d3938] p-1"
										>
											<Link
												className="flex items-center hover:text-[#86D562] capitalize hover:underline"
												to={sm.path}
												onClick={_ => setViewSubmenu("")}
											>
												{sm.title}
											</Link>
										</li>
									)}
								</ul>
								: null
							}
						</div>
						: <Link
							className="flex items-center hover:text-[#86D562] font-bold uppercase"
							to={path}
						>
							{title}
						</Link>
					}
				</li>
			))
		}
	</ul>
}

