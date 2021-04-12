import Styled from 'styled-components';

export const ProfileInfoStyledForm = Styled.form`
    color: #006653;
`;

export const ProfileFormLabel = Styled.label`
    display:block;
    font-size: 14px;
`;

export const ProfileFormInput = Styled.input`
    background-color: #c0c0c0;
    border: none;
    padding: 6px;
    margin: 2px 0;
    width: 8rem;
    border-radius: 0.2rem;
    font-size: 12px;

    @media screen and (min-width: 768px) {
        padding: 12px;
        font-size: 14px;
        width: 12rem;

        &:focus-within {
            outline-color: #006653;
        }
    }
`;

export const ProfileFormButton = Styled.button`
    display: block;
    border-radius: 8px;
    border: 1px solid #06703E;
    background-color: #06703E;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    width: 50%;
    margin: 12px auto;

    &:active {
        transform: scale(0.95);
    }

    @media screen and (min-width: 1024px) {
        font-size: 14px;
        transition: background-color 80ms ease-in, border-color 80ms ease-in;

        &:hover {
            background-color: #005949;
            border-color: #005949;
        }
    }
`;
