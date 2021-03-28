import Styled from 'styled-components';

export const ProfileInfoStyledForm = Styled.form`

`;

export const ProfileFormLabel = Styled.label`
    display:block;
    font-size: 14px;
`;

export const ProfileFormInput = Styled.input`
    background-color: #c0c0c0;
    border: none;
    padding: 6px 6px;
    margin: 2px 0;
    width: 9rem;
    border-radius: 0.2rem;
    font-size: 12px;
`;

export const ProfileFormButton = Styled.button`
    display: inline-block;
    width: 45%;
    margin: 4px 8px 0 0;
    border-radius: 8px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 12px;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
        transform: scale(0.95);
    }
`;
