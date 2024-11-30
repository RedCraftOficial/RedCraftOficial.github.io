interface ButtonProps {
	label: string
	onClick?: any
	variant?: 'primary' | 'secondary' | 'danger'
	disabled?: boolean
	className?: string
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	variant = 'primary',
	disabled = false,
	className = '',
}) => {
	const baseStyles =
		'px-4 py-2 rounded font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2';

	const variantStyles = {
		primary: 'bg-green-500 hover:bg-green-600 focus:ring-green-500',
		secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500',
		danger: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
	};

	const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
		} ${className}`

	return (
		<button
			className={buttonStyles}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	)
}
