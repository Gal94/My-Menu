import Styled from 'styled-components';

const width = (props) => {
    if (props.percent) {
        return props.percent;
    }
    return 0;
};

const bgColor = (props) => {
    console.log(props);
    if (props.bgColor) {
        return props.bgColor;
    }
    return '#d0d0d0';
};

export const ProgressBarContainer = Styled.div`
    width: 100%;
    height: 3px;
    background-color: #d0d0d0;
    border-radius: 10rem;
    position: relative;

    &:after {
        position: absolute;
        content: '';
        height: 3px;
        top: 0;
        left: 0;
        background-color: ${bgColor};
        width: ${width}%;
    }
`;
