import { useParams } from "react-router-dom"
import { useState } from "react"

export const Project = () => {
	const id = useParams()

	const project = {
		id,
		title: "Projectid",
		subtitle: "lorem ipsulorem ipsu mmlorem ipsum",
		descriptions: "projectid",
		cover: "/redcraft_logo.webp",
		images: [
			{
				id: "123",
				path: "/redcraft_logo.webp",
				type: "img",
			},
			{
				id: "132",
				path: "/redcraft_logo.webp",
				type: "3d",
			},
			{
				id: "312",
				path: "/redcraft_logo.webp",
				type: "img",
			},
			{
				id: "213",
				path: "/redcraft_logo.webp",
				type: "img",
			},
		],
		tags: ""
	}

	const [imgSelected, setImgSelected] = useState(project.images[0])

	return <div
		className="flex gap-3 h-screen p-2"
	>
		<div>
			<ul
				className="flex flex-col gap-3"
			>
				{
					project.images.map((image) =>
						<li
							className={`p-2 rounded border-2 w-fit cursor-pointer ${image.id == imgSelected.id
								? "border-blue-500"
								: "border-transparent"}`
							}
							onClick={_ => setImgSelected(image)}
							key={image.id}
						>
							<img
								src={image.path}
								className="w-32 h-32 object-contain"
							/>
						</li>
					)
				}
			</ul>
		</div>
		<img
			className="w-full h-full object-contain"
			src={imgSelected.path}
		/>
	</div>
}

