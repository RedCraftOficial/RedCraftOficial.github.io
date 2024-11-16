import { ProjectType } from "../../types/ProjectType"
import { Link } from "react-router-dom"

export const CardProject = ({
	project
}: {
	project: ProjectType
}) => {
	return <Link to={`/project/${project.id}`}>
		<div
			className="p-2 w-52 h-52 cursor-pointer hover:shadow-lg"
		>
			<div className="p-1 flex justify-center">
				<img
					src={project.imgs != "" ? project.imgs : "/blocks.webp"}
					className={"object-contain"}
				/>
			</div>
			<div className="mt-3 pb-3">
				<h2 className="text-xl">
					{project.title}
				</h2>
				<div className="text-[#aba09c]">
					<p className="text-sm">
						{project.subtitle}
					</p>
					{
						project.category != ""
							? <div className="border-[#aba09c] border-t mt-2 pt-1">
								{project.category}
							</div>
							: null
					}
				</div>
			</div>
		</div>
	</Link>
}
