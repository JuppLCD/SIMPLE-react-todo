import { AppUi } from "./AppUi";
import { TodoProvider } from "../../useContext";

import "./App.css";
export function App() {
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}
