import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import 'rc-tooltip/assets/bootstrap.css';
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

// TODO: Make this component pc responsive

const MacrosForm = (props) => {
    const [state, setState] = useState({
        calories: 0,
        fats: 0,
        proteins: 0,
        carbs: 0,
    });

    // check if a user entered a number only
    const onInputChange = (event) => {
        if (Number.isInteger(+event.target.value)) {
            const newState = { ...state };
            newState[event.target.name] = +event.target.value;
            setState(newState);
        }
    };

    //once form is submitted
    const onSubmitForm = async (event) => {
        event.preventDefault();
        // logic to check values

        try {
            const response = await fetch(
                'http://localhost:5000/api/profile/macros',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer ' + localStorage.getItem('MyMenuToken'),
                    },
                    body: JSON.stringify(state),
                }
            );

            const data = await response.json();

            if (response.status >= 400) {
                console.log(data);
                toast.error(data.message);
            }

            // update the profile reducer with the new goals
            props.onUpdateMacros(data.goal);
        } catch (err) {
            toast.error('Failed to save changed');
        }
    };

    // Fetch user macros from database
    const getUserMacros = async () => {
        try {
            const response = await fetch(
                'http://localhost:5000/api/profile/macros',
                {
                    method: 'GET',
                    headers: {
                        Authorization:
                            'Bearer ' + localStorage.getItem('MyMenuToken'),
                    },
                }
            );

            const data = await response.json();

            if (response.status >= 400) {
                console.log(data);
                toast.error(data.message);
            }
            setState({
                calories: data.goal.calories,
                fats: data.goal.fats,
                proteins: data.goal.proteins,
                carbs: data.goal.carbs,
            });
            props.onUpdateMacros(data.goal);
        } catch (err) {
            toast.error('Failed to fetch values');
        }
    };

    useEffect(() => {
        // check if the macros object is empty (never fetched macros)
        if (Object.keys(props.macros).length === 0) {
            getUserMacros();
        } else {
            setState({
                calories: props.macros.calories,
                fats: props.macros.fats,
                proteins: props.macros.proteins,
                carbs: props.macros.carbs,
            });
        }
    }, []);

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