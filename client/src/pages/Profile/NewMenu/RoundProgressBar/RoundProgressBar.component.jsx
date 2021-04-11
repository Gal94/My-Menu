import { buildStyles } from 'react-circular-progressbar';
import {
    ProgressBar,
    RoundProgressbarContainer,
    RoundProgressbarTitle,
    RoundProgressbarValue,
} from './RoundProgressBar.styles';

// Make sure it re-renders every time theres a refresh
export const RoundProgressBar = (props) => {
    const { name, amount, color } = props.macro;
    const { currentValue } = props;

    const textColor = () => {
        if (amount < currentValue) {
            return 'red';
        }

        return 'black';
    };

    const calculatePercentage = () => {
        if (amount === 0) {
            return 0;
        }

        return Math.round((currentValue / amount) * 100);
    };

    return (
        <RoundProgressbarContainer>
            <RoundProgressbarTitle>{name}</RoundProgressbarTitle>
            <ProgressBar
                value={calculatePercentage()}
                styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: 'round',
                    textSize: '20px',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    pathColor: `${color}`,
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}
            />

            {name !== 'Calories' ? (
                <RoundProgressbarValue style={{ margin: 0 }}>
                    <span style={{ color: textColor() }}>
                        {Math.round(currentValue)}g{' '}
                    </span>
                    / {amount}g
                </RoundProgressbarValue>
            ) : (
                <RoundProgressbarValue style={{ margin: 0 }}>
                    <span style={{ color: textColor() }}>
                        {Math.round(currentValue)} kcal{' '}
                    </span>
                    / {amount} kcal
                </RoundProgressbarValue>
            )}
        </RoundProgressbarContainer>
    );
};
