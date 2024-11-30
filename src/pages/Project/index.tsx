// import { useParams } from "react-router-dom"
import { useState } from "react"

// import { DB } from "../../config"
import { useProjects } from "../../hooks/useProjects"

import { Button } from "../../components/element"

export const Project = () => {
	// const id = useParams()
	// const [pjt, carregando, erro] = useProjects(DB.projects.get_by_id(id))

	const [pjt, carregando, erro] = useProjects("test")

	if (carregando) return <p>Carregando...</p>
	if (erro) return <p>Erro: {erro}</p>

	const project = pjt[0]

	const [imgSelected, setImgSelected] = useState(0)

	return <div
		className="flex flex-col gap-3 h-screen p-2"
	>
		{project.imgs.length
			? <div
				className="bg-[#262423] h-fit p-8"
			>
				<img
					className="w-80 h-80 object-contain"
					src={project.imgs[imgSelected]}
				/>
				<ul
					className="flex gap-1"
				>
					{
						project.imgs.map((img, i) =>
							<li
								className={`p-2 rounded border-2 w-fit cursor-pointer ${i == imgSelected
									? "border-blue-500"
									: "bg-[#3d3938] border-transparent"}`
								}
								onClick={_ => setImgSelected(i)}
								key={"img-" + i}
							>
								<img
									src={img}
									className="w-20 h-20 object-contain"
								/>
							</li>
						)
					}
				</ul>
			</div>
			: null
		}

		<div className="bg-[#262423] h-fit p-3">
			{project.description
				? <div
					className=""
				>
					<h2>Descrição:</h2>
					<p>
						{project.description}
					</p>
				</div>
				: null
			}
			{project.mcpack
				? <div
					className="mt-20"
				>
					<Button
						onClick={() => {
							const newTab = window.open(
								`https://drive.google.com/uc?export=download&id=${project.mcpack}`,
								'_blank')
							if (newTab) {
								newTab.focus();
							} else {
								console.error("Falha ao abrir a nova aba. Verifique as configurações do navegador.");
							}
						}}
						label="Baixar"
					/>
				</div>
				: null
			}
		</div>
	</div>
}

