export default function MenuIcon({ className, onClick }) {
	return (
		<svg
			onClick={onClick}
			className={className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 18H20M4 6H20H4ZM4 12H20H4Z'
				stroke='current'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
