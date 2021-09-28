import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Older from "./components/Older/Older";
import Popular from "./components/Popular/Popular";
import Layout from "./Layouts/Layout";
import Theme from "./styles/Theme";
import { Flip, Fade, Zoom, LightSpeed } from "react-reveal";

function App() {
	return (
		<Theme>
			<Layout>
				<Fade top>
					<Home />
				</Fade>
				<Flip top>
					<About />
				</Flip>
				<Zoom>
					<Menu />
				</Zoom>
				<Popular />
				<Gallery />
				<LightSpeed top>
					<Older />
				</LightSpeed>
			</Layout>
		</Theme>
	);
}

export default App;
