import { RenderYouMayLikeContainer } from "../../assets/styles/styleds/youMayLike";
import YouMayLike from "../YouMayLike";

function RenderYouMayLike(props) {
    return (
        <RenderYouMayLikeContainer>
            {
                props.youMayLike.map((value) => {
                    return (
                        <YouMayLike
                            track={value}
                        />
                    )
                })
            }
        </RenderYouMayLikeContainer>
    );
}

export default RenderYouMayLike;