import { useState } from "react"
import { Link } from "react-router-dom"

import listMenu from "./listheader.js"

import searchIcon from "../../assets/icons/search.svg"

import { MenuSite } from "./MenuSite"
import { MenuMobile } from "./MenuMobile"

export const Header = () => {
	const [viewSubmenu, setViewSubmenu] = useState("")

	return <header
		className="fixed top-0 left-0 right-0 w-full p-3 bg-[#262423] rounded z-30"
	>
		<div className="flex w-full mx-auto container items-center relative p-5">
			<div
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center"
			>
				<Link
					to="/"
					className="flex gap-2 w-fit items-center cursor-pointer"
				>
					<h1 className="text-2xl font-bold">
						<img
							className="w-12 h-12"
							src="/redcraft_logo.webp"
							alt="redcraftworld logo"
						/>
					</h1>
					<h2
						className="text-white text-xl font-bold font-Monocraft"
					>
						RedCraft
					</h2>
				</Link>
			</div>

			<div className="absolute hidden md:flex z-10">
				<MenuSite
					viewSubmenu={viewSubmenu}
					setViewSubmenu={setViewSubmenu}
					listMenu={listMenu}
				/>
			</div>

			<div className="z-20 absolute left-4 flex md:hidden">
				<MenuMobile
					viewSubmenu={viewSubmenu}
					setViewSubmenu={setViewSubmenu}
					listMenu={listMenu}
				/>
			</div>

			<button
				className="absolute right-0 flex items-center gap-1 justify-end text-white pr-10"
				onClick={_ => console.log("dev")}
			>
				<img className="w-5 h-5" src={searchIcon} />
				<span className="hidden md:flex">
					Pesquisar
				</span>
			</button>
		</div>
	</header>
}

