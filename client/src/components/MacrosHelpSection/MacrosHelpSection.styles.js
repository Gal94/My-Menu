import Styled, { css } from 'styled-components';

export const MacrosHelpWrapper = Styled.div`
    
`;

const isActiveBtn = (props) => {
    if (props.isActive) {
        return css`
            background-color: #c6c6c6;
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
    background-color: #d0d0d0;
    width: 100%;
    position: relative;
    transition: 0.4s;
    color: #666666;
    ${isActiveBtn}

    &:hover {
        background-color: #c6c6c6;
    }
`;

export const PlusIcon = Styled.span`
    position: absolute;
    right: 15px;
    color: #999999;
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
    background-color: #dfdfdf;
    overflow: hidden;
    transition: all 1s ease-out;
    color: #666666;
    font-size: 16px;
`;
