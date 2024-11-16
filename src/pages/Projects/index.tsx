import { SectionProjects } from "../../components/Projects/"
import { DB } from "../../config"
import { useProjects } from "../../hooks/useProjects"

export const Projects = () => {
	const [dados, carregando, erro] = useProjects(DB.projects.get_all)

	if (carregando) return <p>Carregando...</p>
	if (erro) return <p>Erro: {erro}</p>

	return <div>
		<ul>
			{dados.length
				? <SectionProjects projects={dados} />
				: null
			}
		</ul>
	</div>
}

