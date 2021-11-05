import styled from 'styled-components';
import colors from '../../../colors';

export const PlayBarContainer = styled.div`
    position: fixed;
    bottom: 0;

    width: 100%;
    height: 75px;
    
    background-color: ${colors.blackContentBackground};

    -webkit-box-shadow: 5px 0px 15px -5px ${colors.black}; 
    box-shadow: 5px 0px 15px -5px ${colors.black};

    z-index: 1;

    padding: 0 5%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const PlayBarImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;

    border: 2px solid ${colors.whiteButtons};
`;

export const PlayBarInformationsContainer = styled.div`
    width: 100px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 15px;
`;

export const PlayBarTitle = styled.p`
    width: 200px;
    height: 35px;
    font-size: 14px;
    color: ${colors.whiteFonts};
    font-weight: 700;
`;

export const PlayBarSubTitle = styled.p`
    width: 200px;
    font-size: 12px;
    color: ${colors.whiteFonts};
    font-weight: 300;
`;

export const PlayBarControlsContainer = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-items: center;

    margin-left: 20%;
`;

export const PlayerContainer = styled.div`
    width: 100%;    

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const PlayerInformationText = styled.p`
    font-size: 10px;
    color: ${colors.whiteButtons};
`;

export const PlayerSlider = styled.input`
    background: ${colors.whiteButtons};
    position: relative;
    outline: none;

    width: 70%;
    height: 10px;
    border-radius: 20px;

    transition: 0.2s;

    &::-webkit-slider-runnable-track {
        background: ${colors.whiteButtons};
        border-radius: 20px;
        position: relative;
        width: 70%;
        height: 5px;
        outline: none;
    }

    &::-moz-range-track {
        background: ${colors.whiteButtons};
        border-radius: 20px;
        position: relative;
        width: 70%;
        height: 5px;
        outline: none;
    }

    &::-moz-focus-outer {
        border: 0;
    }

    &::-webkit-slider-thumb {
        --webkit-appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        border: none;
        background-color: #000;
        cursor: pointer;
        position: relative;
        margin: -5px 0 0 0;
        z-index: 3;
        box-sizing: border-box; 
    }

    &:active::-webkit-slider-thumb {
        transform: scale(1.2);
        background: ${colors.whiteButtons};
    }

    &::before {
        content: '';
    }
`;

export const PlayerButtonsContainer = styled.div`
    width: 40%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const PlayerButtons = styled.div`
    color: ${colors.whiteButtons};
    width: 20px;
    height: 20px;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.6s;

    &:hover {
        transform: scale(1.5);

        cursor: pointer;
    }
`;

export const PlayerSettings = styled.div`
    width: 10%;
    height: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-left: 20%;
`;
