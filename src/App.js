import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Older from "./components/Older/Older";
import Popular from "./components/Popular/Popular";
import Layout from "./Layouts/Layout";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <Layout>
        <Home />
        <About />
        <Menu />
		<Popular/>
		<Gallery />
		<Older />
      </Layout>
    </Theme>
  );
}

export default App;
