import PropTypes from 'prop-types';

import { ProgressBarContainer } from './ProgressBar.styles';

const ProgressBar = (props) => {
    return (
        <ProgressBarContainer
            percent={props.value}
            bgColor={props.bgColor}
        ></ProgressBarContainer>
    );
};

ProgressBar.propTypes = {
    value: Number,
    bgColor: PropTypes.string,
};

export default ProgressBar;
