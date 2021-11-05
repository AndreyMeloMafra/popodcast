import { faCompass, faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import { SideBarContainer, SideBarNavigatorContainer } from "../../assets/styles/styleds/sidebar";
import SideBarButton from "../Sidebar/SidebarButton/index";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarNavigatorContainer>
        <SideBarButton route="/" icon={faCompass} title="Descobrir" />
        <SideBarButton route="/library" icon={faBook} title="Biblioteca" />
        <SideBarButton route="/search" icon={faSearch} title="Buscar" />
      </SideBarNavigatorContainer>
    </SideBarContainer>
  );
}

export default SideBar;