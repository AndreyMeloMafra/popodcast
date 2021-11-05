import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import colors from "../../../assets/colors";
import { SideBarNavigator } from "../../../assets/styles/styleds/sidebar";

function SideBarButton(props) {

    const [isActive, setIsActive] = useState(false);

    const styles = {
        link: {
            textDecoration: "none",
            marginLeft: 10
        }
    }
    return (
        <SideBarNavigator>
            <FontAwesomeIcon
                icon={props.icon}
                style={{
                    color: isActive ? colors.mainPurple : colors.whiteFonts
                }}
            />
            <Link
                style={{
                    ...styles.link,
                    color: isActive ? colors.mainPurple : colors.whiteFonts
                }}
                onFocus={() => setIsActive(!isActive)}
                to={props.route}>
                {props.title}
            </Link>

        </SideBarNavigator>
    );
}

export default SideBarButton;