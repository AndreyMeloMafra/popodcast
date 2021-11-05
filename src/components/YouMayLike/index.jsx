import { YouMayLikeContainer, YouMayLikeImage, YouMayLikeTitle } from "../../assets/styles/styleds/youMayLike";
import { useDispatch } from "react-redux";
import { selectTrack } from "../../configs/redux/ducks/player";

function YouMayLike(props) {

  const dispatch = useDispatch();

  const selectTrackFunction = () => {
    dispatch(selectTrack(props.track))
  }

  return (
        <YouMayLikeContainer>
            <YouMayLikeTitle>{props.track.title}</YouMayLikeTitle>
            <YouMayLikeImage onClick={selectTrackFunction} src={props.track.image} />
        </YouMayLikeContainer>
  );
}

export default YouMayLike;