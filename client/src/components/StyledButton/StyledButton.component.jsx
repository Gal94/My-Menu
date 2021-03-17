import { Chevron, StyledButtonContainer } from './StyledButton.styles';
import { Link } from 'react-scroll';

// TODO Scroll to next section upon click
const StyledButton = () => {
    return (
        <div style={{ width: 'fit-content' }}>
            <StyledButtonContainer>
                <Link to='Info' spy={true} smooth={true}>SHOW ME MORE</Link>
            </StyledButtonContainer>
            <Chevron />
        </div>
    );
};

export default StyledButton;
