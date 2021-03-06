import { Chevron, StyledButtonContainer } from './StyledButton.styles';
import { Link } from 'react-scroll';

// * Scroll to next section upon click
const StyledButton = () => {
    return (
        <div style={{ width: 'fit-content' }}>
            <StyledButtonContainer>
                <Link to='Features' spy={true} smooth={true}>
                    SHOW ME MORE
                </Link>
            </StyledButtonContainer>
            <Chevron />
        </div>
    );
};

export default StyledButton;
