import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

export const Home = () => {
	return <div
		className="flex flex-col gap-2 text-slate-200"
	>
		<Hero />
		<Projects />
		home
	</div>
}

