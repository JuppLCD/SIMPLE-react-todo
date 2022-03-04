import "./styles.css";

export function Button({ clickFuntion, children, typeBtn = "button", classBtn = "" }) {
	return (
		<button type={typeBtn} className={`btn ${classBtn}`} onClick={clickFuntion}>
			{children}
		</button>
	);
}
