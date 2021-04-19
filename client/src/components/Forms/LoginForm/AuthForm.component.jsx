
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { login, register } from '../../../store/actions/authActions';
import {
    Form,
    FormInput,
    LoginPageWrapper,
    SignInForm,
    StyledFormButton,
    StyledH1,
} from './AuthForm.styles';

const AuthForm = (props) => {
    const [fields, setFields] = useState({
        email: '',
        password: '',
    });

    const formType = props.formType;

    const History = useHistory();

    // Redirect in case user is logged in
    useEffect(() => {
        localStorage.getItem('MyMenuToken') && History.push('/');
    }, [History]);

    const inputChangeHandler = (event) => {
        const newFields = { ...fields };
        newFields[event.target.name] = event.target.value;
        setFields(newFields);
    };

    // Validate email and password fields
    const validateForm = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(fields.email).toLowerCase().trim())) {
            toast.error('Please provide a valid email.');
            return false;
        } else if (fields.password.length < 6 || fields.password.length > 14) {
            toast.error('Please provide a password between 6-14 characters.');
            return false;
        }
        return true;
    };

    // Submit form and return to homepage upon logging in
    const onSubmitForm = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        // Check if needs to register
        let canLogin = true;
        if (formType === 'register') {
            canLogin = await props.onRegister(fields.email, fields.password);
        }

        // dispatch a login request for both registered user or created user
        if (canLogin === true) {
            await props.onLogin(fields.email, fields.password);
            if (localStorage.getItem('MyMenuToken')) {
                History.push('/');
            }
        }
    };

    const formTitle = (
        <StyledH1>{formType === 'login' ? 'Sign in' : 'Register'}</StyledH1>
    );

    const formButton =
        formType === 'login' ? (
            <StyledFormButton>sign in</StyledFormButton>
        ) : (
            <StyledFormButton type='register'>Register</StyledFormButton>
        );

    return (
        <LoginPageWrapper>
            <SignInForm>
                <Form onSubmit={onSubmitForm}>
                    {formTitle}
                    <FormInput
                        autoComplete='new-password'
                        value={fields.email}
                        type='email'
                        name='email'
                        placeholder='Email'
                        onChange={inputChangeHandler}
                    />
                    <FormInput
                        autoComplete='new-password'
                        type='password'
                        name='password'
                        value={fields.password}
                        placeholder='Password'
                        onChange={inputChangeHandler}
                    />

                    {formButton}
                </Form>
            </SignInForm>
        </LoginPageWrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(login(email, password)),
        onRegister: (email, password) => dispatch(register(email, password)),
    };
};

export default connect(null, mapDispatchToProps)(AuthForm);
