import { useGlobalContext } from "./context";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import SubMenu from "./SubMenu";

const App = () => {
  const { isSideBarOpen } = useGlobalContext();
  return <main>
    <Navbar/>
    <Hero/>
    <Sidebar/>
    <SubMenu/>
  </main>;
};
export default App;
