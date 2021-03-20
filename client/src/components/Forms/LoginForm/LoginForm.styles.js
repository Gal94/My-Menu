import Styled from 'styled-components';

export const LoginPageWrapper = Styled.div`
    width: 100%;
    height: 100%;
`;

export const SignUpPrompt = Styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #00c6ff, #0072ff);
`;

export const StyledH1 = Styled.h1`
    font-weight: bold;
    margin: 0 0 20px;
    color: black;
    font-size: 24px;
    text-align: center;
`;

export const StyledP = Styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 10px 0 30px;
    text-align: center;
    color: white;
`;

export const StyledAuthButton = Styled.button`
    border-radius: 20px;
    border: 1px solid white;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 24px;
    width: 50%;
    margin: auto;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
`;

export const SignInForm = Styled.div`
    height: 100%;
`;

export const Form = Styled.form`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 25px 50px;
    height: 70%;
    text-align: center;
`;

export const FormInput = Styled.input`
    background-color: #c0c0c0;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;

export const StyledFormButton = Styled.button`
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    outline: none;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
        transform: scale(0.95);
    }
`;
