import { Link } from "react-router-dom"
export const NotFound = () => {
	return <div>
		<h1>404</h1>
		<Link
			to="/"
			className="text-blue-500 hover:text-blue-700"
		>
			Voltar
		</Link>
	</div>
}

