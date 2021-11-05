import styled from 'styled-components';
import colors from '../../../colors';

export const SideBarContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    padding: 10px 20px;

    box-sizing: border-box;

    height: 100%;
    width: 150px;
    background-color: ${colors.blackContentBackground};

    -webkit-box-shadow: 5px 0px 15px -5px ${colors.black}; 
    box-shadow: 5px 0px 15px -5px ${colors.black};
`;

export const SideBarNavigatorContainer = styled.div`
    width: 100%;
    height: 150px
`;

export const SideBarNavigator = styled.li`
    display: flex;
    align-items: center;

    width: auto;
    height: 50px;

    color: ${colors.whiteFonts};

    text-decoration: none;
`;
