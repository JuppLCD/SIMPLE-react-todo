import './styles.css';

interface Props {
	clickFuntion?: any;
	children: JSX.Element | string;
	classBtn?: string;
	typeBtn?: 'button' | 'submit' | 'reset';
}
export default function Button({ clickFuntion, children, typeBtn = 'button', classBtn = '' }: Props) {
	return (
		<button type={typeBtn} className={`btn ${classBtn}`} onClick={clickFuntion}>
			{children}
		</button>
	);
}
