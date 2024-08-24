import sublinks from "./data";
import { useGlobalContext } from "./context";
import { useRef } from "react";

const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const subMenuContainer = useRef(null)
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const handelMouseLeave = (e) => {
    const subMenu =  subMenuContainer.current
    const {left ,right ,bottom}= subMenu.getBoundingClientRect()
    const {clientX ,clientY}= e
    if(clientX <left-1 || clientX > right-1 || clientY > bottom-1){
      setPageId(null)
    }
  
    
  };
  return (
    <div
      className={currentPage ? "submenu  show-submenu " : "submenu"}
      onMouseLeave={handelMouseLeave}
      ref={subMenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;

          return (
            <a key={id} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
