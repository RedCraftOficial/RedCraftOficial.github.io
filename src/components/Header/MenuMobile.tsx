import { Link } from "react-router-dom"
import arrowSVG from "../../assets/icons/arrow.svg"

import menuIcon from "../../assets/icons/menu.svg"
import closeIcon from "../../assets/icons/close.svg"

import { LinkItem } from "./typerHeader"

// import { Btn } from "../"

import { useState } from "react"

export const MenuMobile = ({
	viewSubmenu,
	setViewSubmenu,
	listMenu,
}: {
	viewSubmenu: string
	setViewSubmenu: (s: string) => void
	listMenu: LinkItem[]
}) => {
	const [viewMenu, setViewMenu] = useState(false)

	return <div>
		<button
			className={`text-white rounded px-2 py-1 ${viewMenu ? "border-2 border-white" : "bg-[#86D562]"}`}
			onClick={_ => setViewMenu(s => !s)}
		>
			<img className="w-5 h-5" src={viewMenu ? closeIcon : menuIcon} />
		</button>

		{viewMenu
			? <ul
				className="fixed bg-[#262423] w-1/2 left-0 z-10 h-screen flex flex-col gap-5 text-sm pt-5 pl-3"
			>
				{listMenu
					.filter((f: LinkItem) => f.online)
					.map(({ title, path, submenu }: LinkItem) => (
						<li
							className={`text-white border-b border-[#3d3938] pb-1 pl-4`}
							key={path}
						>
							{submenu.length > 0 ?
								<div
									className="relative"
								>
									<div
										className="flex gap-1 items-center hover:text-[#86D562] cursor-pointer font-bold uppercase"
										onClick={_ => {
											setViewSubmenu(viewSubmenu == path ? "" : path)
										}}
									>
										<div className="flex w-full justify-between pr-3">
											{title}
											<img
												className={`w-3 h-3 ${viewSubmenu === path ? "rotate-180" : ""}`}
												src={arrowSVG}
											/>
										</div>
									</div>
									{viewSubmenu === path
										? <ul className="absolute flex flex-col w-full pt-3">
											{submenu.map(sm =>
												<li
													key={sm.path}
													className="border-b-2 border-[#3d3938] p-1"
												>
													<Link
														className="flex items-center hover:text-[#86D562] capitalize hover:underline"
														to={sm.path}
														onClick={_ => {
															setViewMenu(false)
															setViewSubmenu("")
														}}
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
									onClick={_ =>
										setViewMenu(false)
									}
									to={path}
								>
									{title}
								</Link>
							}
						</li>
					))
				}
			</ul>
			: null
		}
	</div>
}

