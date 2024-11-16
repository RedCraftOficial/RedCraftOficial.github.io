import { ProjectType } from "../../types/ProjectType"
import { Title } from "../element"
import { CardProject } from "./CardProject"

export const SectionProjects = ({
	projects
}: {
	projects: ProjectType[]
}) => {
	return <section>
		<div className="flex w-full justify-center">
			<Title>projetos</Title>
		</div>
		<ul className="flex flex-wrap w-full gap-20 justify-center items-center">
			{
				projects.map((d: any) =>
					<li key={d.id} className="w-fit">
						<CardProject project={d} />
					</li>
				)
			}
		</ul>
	</section>
}
