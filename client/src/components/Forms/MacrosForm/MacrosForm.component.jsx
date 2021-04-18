import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { updateUserMacros } from '../../../store/actions/profileActions';
import {
    MacrosPageStyledForm,
    MacrosPageFormDiv,
    MacrosPageInputContainer,
    MacrosPageLabel,
    MacrosPageInput,
    MacrosPageNutrientsContainer,
    MacroFormSubmitButton,
} from './MacrosForm.styles';
import MacroPieChart from './MacroPieChart/MacroPieChart.component';
import { getMacros, saveMacrosForm } from '../../../helpers/ApiCalls';

const MacrosForm = (props) => {
    const [state, setState] = useState({
        calories: 0,
        fats: 0,
        proteins: 0,
        carbs: 0,
    });

    // * check if user entered a positive number only
    const onInputChange = (event) => {
        if (Number.isInteger(+event.target.value) && event.target.value >= 0) {
            const newState = { ...state };
            newState[event.target.name] = +event.target.value;
            setState(newState);
        }
    };

    // * Validates input and submits to back end
    const onSubmitForm = (event) => {
        event.preventDefault();
        // TODO: logic to check values
        for (let macroName in state) {
            if (
                !Number.isInteger(+state[macroName]) ||
                !(state[macroName] >= 0)
            ) {
                return toast.error(`${macroName} must contain a valid value.`);
            }
        }

        saveMacrosForm(state, props.onUpdateMacros);
    };

    useEffect(() => {
        // * check if the macros object is empty
        if (Object.keys(props.macros).length === 0) {
            getMacros(props.onUpdateMacros, setState);
        } else {
            setState({
                calories: props.macros.calories,
                fats: props.macros.fats,
                proteins: props.macros.proteins,
                carbs: props.macros.carbs,
            });
        }
    }, [props.macros, props.onUpdateMacros]);

    return (
        <MacrosPageFormDiv>
            <MacrosPageStyledForm onSubmit={onSubmitForm}>
                <MacrosPageInputContainer>
                    <MacrosPageLabel htmlFor='calories'>
                        Calories
                    </MacrosPageLabel>
                    <MacrosPageInput
                        name='calories'
                        type='text'
                        onChange={onInputChange}
                        value={state.calories}
                    />
                </MacrosPageInputContainer>
                <MacrosPageNutrientsContainer>
                    <MacrosPageInputContainer>
                        <MacrosPageLabel htmlFor='carbs'>Carbs</MacrosPageLabel>
                        <MacrosPageInput
                            name='carbs'
                            type='text'
                            value={state.carbs}
                            onChange={onInputChange}
                        />
                    </MacrosPageInputContainer>
                    <MacrosPageInputContainer>
                        <MacrosPageLabel htmlFor='proteins'>
                            Proteins
                        </MacrosPageLabel>
                        <MacrosPageInput
                            name='proteins'
                            type='text'
                            onChange={onInputChange}
                            value={state.proteins}
                        />
                    </MacrosPageInputContainer>
                    <MacrosPageInputContainer>
                        <MacrosPageLabel htmlFor='fats'>Fats</MacrosPageLabel>
                        <MacrosPageInput
                            name='fats'
                            type='text'
                            onChange={onInputChange}
                            value={state.fats}
                        />
                    </MacrosPageInputContainer>
                </MacrosPageNutrientsContainer>
                <MacroPieChart values={state} />
                <MacroFormSubmitButton>submit</MacroFormSubmitButton>
            </MacrosPageStyledForm>
        </MacrosPageFormDiv>
    );
};

MacrosForm.propTypes = {
    macros: PropTypes.object.isRequired,
    onUpdateMacros: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        macros: state.profile.macros,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMacros: (userMacros) => dispatch(updateUserMacros(userMacros)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MacrosForm);
