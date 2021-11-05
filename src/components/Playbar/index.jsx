import { faBackward, faBookmark, faFastForward, faForward, faPause, faPlay, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import colors from "../../assets/colors";
import { PlayBarContainer, PlayBarControlsContainer, PlayBarImage, PlayBarInformationsContainer, PlayBarSubTitle, PlayBarTitle, PlayerButtons, PlayerButtonsContainer, PlayerContainer, PlayerInformationText, PlayerSettings } from "../../assets/styles/styleds/playbar";

import { useSelector } from 'react-redux';

import "../../assets/styles/css/audioPlayer.css"

function Playbar() {

    const track = useSelector(state => state.playerSlice)

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [acelerateReprodution, setAcelerateReprodution] = useState(1);
    const [informations, setInformations] = useState({});

    // refs
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    const playPauseAudio = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);

        if (prevValue) {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        } else {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        changePlayerCurrentTimer();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTimer();
    }

    const changePlayerCurrentTimer = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    const throwBack = () => {
        audioPlayer.current.currentTime = audioPlayer.current.currentTime - 10;
    };

    const advace = () => {
        audioPlayer.current.currentTime = audioPlayer.current.currentTime + 10;
    }

    const acelerate = () => {
        switch (acelerateReprodution) {
            case 1:
                setAcelerateReprodution(1.5);
                audioPlayer.current.playbackRate = 1.5;
                break;
            default:
                setAcelerateReprodution(1);
                audioPlayer.current.playbackRate = 1;
                break;
        }
    }

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    useEffect(() => {
        setIsPlaying(false);
        setInformations(track.track);
    }, [track.track]);

    const calculateTime = (secondsToCalculate) => {
        const minutes = Math.floor(secondsToCalculate / 60);
        const formatedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secondsToCalculate % 60);
        const formatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formatedMinutes}:${formatedSeconds}`;
    }

    return (
        <PlayBarContainer>
            <audio ref={audioPlayer} src={informations.track} />
            <PlayBarImage src={informations.image} />
            <PlayBarInformationsContainer>
                <PlayBarTitle>{informations.title}</PlayBarTitle>
                <PlayBarSubTitle>{informations.author}</PlayBarSubTitle>
            </PlayBarInformationsContainer>

            <PlayBarControlsContainer>

                <PlayerButtonsContainer>

                    <PlayerButtons onClick={throwBack}>
                        <FontAwesomeIcon icon={faBackward} />
                    </PlayerButtons>
                    <PlayerButtons onClick={playPauseAudio} >
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </PlayerButtons>
                    <PlayerButtons onClick={advace}>
                        <FontAwesomeIcon icon={faForward} />
                    </PlayerButtons>
                </PlayerButtonsContainer>

                <PlayerContainer>
                    <PlayerInformationText>{calculateTime(currentTime)}</PlayerInformationText>
                    <input className="progressBar" type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
                    <PlayerInformationText>{duration && !isNaN(duration) && calculateTime(duration) ? calculateTime(duration) : '00:00'}</PlayerInformationText>
                </PlayerContainer>
            </PlayBarControlsContainer>

            <PlayerSettings>
                <PlayerButtons onClick={acelerate}>
                    <PlayerInformationText>{acelerateReprodution}x</PlayerInformationText>
                    <FontAwesomeIcon icon={faFastForward} style={{ color: colors.mainPurple, marginBottom: 13 }} />
                </PlayerButtons>
                <PlayerButtons>
                    <FontAwesomeIcon icon={faBookmark} style={{ color: colors.mainPurple }} />
                </PlayerButtons>
                <PlayerButtons>
                    <FontAwesomeIcon icon={faShare} style={{ color: colors.mainPurple }} />
                </PlayerButtons>
            </PlayerSettings>
        </PlayBarContainer>
    );
}

export default Playbar;