interface Props {
	children: JSX.Element | JSX.Element[];
}
export default function TodoList({ children }: Props) {
	return (
		<section className='todoList'>
			<ul>{children}</ul>
		</section>
	);
}
