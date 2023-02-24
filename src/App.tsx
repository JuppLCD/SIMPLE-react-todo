import AppUi from './components/AppUi';
import TodoProvider from './context/TodoProvider';

import './App.css';

export default function App() {
	return (
		<TodoProvider>
			<AppUi />
		</TodoProvider>
	);
}
