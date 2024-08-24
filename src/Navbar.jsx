import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId, pageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    console.log(e.target.classList, "classlist");
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
      console.log("you are out of nav-link");
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo"> strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
