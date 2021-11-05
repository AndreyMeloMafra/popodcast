import styled from 'styled-components';
import colors from '../../../colors';

export const RenderYouMayLikeContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;

    width: 55%;

    ::-webkit-scrollbar {
        height: 3px;
    }
    ::-webkit-scrollbar-track {
        background: ${colors.blackContentBackground}; 
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.whiteButtons};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const YouMayLikeContainer = styled.div`
    width: 300px;
    height: 275px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    margin-right: 50px;
`;

export const YouMayLikeTitle = styled.p`
    color: ${colors.whiteFonts};
    font-size: 18px;

    font-weight: thin;

    height: 40px;

    margin-bottom: 15px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const YouMayLikeImage = styled.img`
    width: 300px;
    height: auto;

    box-shadow: 0px 0px 15px 1px #000000
    object-fit: contain;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }
`;
