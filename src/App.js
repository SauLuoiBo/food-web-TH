import Home from "./components/Home/Home";
import Layout from "./Layouts/Layout";
import Theme from "./styles/Theme";

function App() {
	return (
		<Theme>
			<Layout>
				<Home />
			</Layout>
		</Theme>
	);
}

export default App;
