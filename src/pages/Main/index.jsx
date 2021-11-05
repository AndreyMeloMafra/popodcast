import { Outlet } from "react-router-dom";
import { Container } from "../../assets/styles/styleds";
import { Content } from "../../assets/styles/styleds/content";
import Playbar from "../../components/Playbar";
import SideBar from "../../components/Sidebar";

function Main() {
    return (
        <Container >
            <SideBar />
            <Content>
                <Outlet />
            </Content>
            <Playbar />
        </Container>
    );
}

export default Main;