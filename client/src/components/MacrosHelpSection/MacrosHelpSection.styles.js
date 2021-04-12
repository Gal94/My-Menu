import Styled, { css } from 'styled-components';

export const MacrosHelpWrapper = Styled.div`
    
`;

const isActiveBtn = (props) => {
    if (props.isActive) {
        return css`
            background-color: #00a687b0;
        `;
    }
};

export const MacrosHelpTitle = Styled.button`
    font-size: 16px;
    margin: 0;
    padding: 18px 18px;
    text-align: left;
    outline: none;
    border: none;
    background-color: #00A68745;
    width: 100%;
    position: relative;
    transition: 0.4s;
    color: #004034;
    ${isActiveBtn}

    @media screen and (min-width: 1024px) {
        &:hover {
            background-color: #00a687b0;
            cursor: pointer;
        }
    }
`;

export const PlusIcon = Styled.span`
    position: absolute;
    right: 15px;
    color: #004034;
    font-weight: bold;
    font-size: 16px;
`;

const isActiveDiv = (props) => {
    if (props.isActive) {
        return css`
            max-height: 10rem;
            padding: 18px;
        `;
    }
};

export const MacrosHelpInfoDiv = Styled.div`
    padding: 0px 18px;
    background-color: white;
    max-height: 0;
    ${isActiveDiv}
    background-color: #00A68788;
    overflow: hidden;
    transition: all 1s ease-out;
    color: #004034;
    font-size: 16px;
`;
