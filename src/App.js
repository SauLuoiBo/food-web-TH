import About from "./components/About/About";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Layout from "./Layouts/Layout";
import Theme from "./styles/Theme";

function App() {
	return (
		<Theme>
			<Layout>
				<Home />
        <About />
        <Menu />
			</Layout>
		</Theme>
	);
}

export default App;
