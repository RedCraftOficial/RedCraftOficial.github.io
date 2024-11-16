import {
	SectionProjects
} from "../../../components/Projects/"

import { useProjects } from "../../../hooks/useProjects"

import { DB } from "../../../config"

export const Projects = () => {
	const [projects, carregando, erro] = useProjects(DB.projects.get_all)

	if (carregando) return <p>Carregando...</p>
	if (erro) return <p>Erro: {erro}</p>

	return <div
		className="h-screen p-2"
	>
		<SectionProjects projects={projects} />
	</div>
}

