import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import ProgressBar from '../ProgressBar/ProgressBar.component';
import {
    DailyValuesProgressBarContainer,
    DailyValuesTitle,
    DailyValuesWrapper,
    DailyValueContainer,
    DailyValuePercent,
    DailyValueMacroName,
} from './DailyValues.styles';

// Progress Bar component
const DailyValues = (props) => {
    const { item, macros } = props;
    const [values, setValues] = useState({
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0,
    });

    console.log(values);

    useEffect(() => {
        setValues({
            calories: Math.round((item.calories / macros.calories) * 100),
            carbs: Math.round(
                (item.carbohydrates_total_g / macros.carbs) * 100
            ),
            proteins: Math.round((item.protein_g / macros.proteins) * 100),
            fats: Math.round((item.fat_total_g / macros.fats) * 100),
        });
    }, [item, macros]);

    return (
        <DailyValuesWrapper>
            <DailyValuesTitle>Percent of Daily Values</DailyValuesTitle>
            <DailyValuesProgressBarContainer>
                <DailyValueContainer>
                    <ProgressBar value={values.calories} bgColor='orange' />
                    <DailyValuePercent>{values.calories}%</DailyValuePercent>
                    <DailyValueMacroName>Calories</DailyValueMacroName>
                </DailyValueContainer>
                <DailyValueContainer>
                    <ProgressBar value={values.carbs} bgColor='#329C13' />
                    <DailyValuePercent>{values.carbs}%</DailyValuePercent>
                    <DailyValueMacroName>Carbs</DailyValueMacroName>
                </DailyValueContainer>
                <DailyValueContainer>
                    <ProgressBar value={values.fats} bgColor='#E81005' />
                    <DailyValuePercent>{values.fats}%</DailyValuePercent>
                    <DailyValueMacroName>Fat</DailyValueMacroName>
                </DailyValueContainer>
                <DailyValueContainer>
                    <ProgressBar value={values.proteins} bgColor='#9633E8' />
                    <DailyValuePercent>{values.proteins}%</DailyValuePercent>
                    <DailyValueMacroName>Proteins</DailyValueMacroName>
                </DailyValueContainer>
            </DailyValuesProgressBarContainer>
        </DailyValuesWrapper>
    );
};

DailyValues.propTypes = {
    macros: PropTypes.object,
    item: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        macros: state.profile.macros,
    };
};

export default connect(mapStateToProps)(DailyValues);
