import { MetaMaskButton } from "@metamask/sdk-react-ui";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.min.css";
import './header.css'
import './App.css';
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Home from "./components/home";
import Link from "./components/link";
import Mint from "./components/mint";
import Navigation from "./components/nav";
import Roadmap from "./components/roadmap";
import Story from "./components/story";
import Team from "./components/team";

const App = () => {
  return (
    <>
      <div className="App">
        <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
        <Navigation></Navigation>
        <About></About>
        <Mint></Mint>
        <Home></Home>
        <Story></Story>
        <Roadmap></Roadmap>
        <Team></Team>
        <FAQ></FAQ>
        <Link></Link>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;