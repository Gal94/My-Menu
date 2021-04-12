import Styled from 'styled-components';

export const MacrosPageFormDiv = Styled.div`
    margin-top: 16px;
`;

export const MacrosPageStyledForm = Styled.form`
    width: 18rem;
    margin: auto;
`;

export const MacrosPageInputContainer = Styled.div`
    width: 5rem;
    margin: 0 auto;
`;

export const MacrosPageNutrientsContainer = Styled.div`
    display: flex;
    margin-top: 16px;
    justify-content: center;
`;

export const MacrosPageInput = Styled.input`
    width: 100%;
    padding: 0;
    text-align: center;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #004034;
    
    &:focus-within {
        outline: none;
        box-shadow: 1px 1px 3px #00403455, -1px -1px 3px #00403455;
    }
`;

export const MacrosPageLabel = Styled.label`
    width: 100%;
    font-size: 14px;
    margin-bottom: 4px;
    text-align: center;
    display: flex;
    justify-content: center;
    color: #004034;
`;

export const MacroFormSubmitButton = Styled.button`
    display: block;
    margin: 0 auto;
    padding: 8px 64px;
    border-radius: 20px;
    border: 1px solid #00A687;
    background-color: #00A687;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    transition: transform 80ms ease-in;

    &:active {
        transform: scale(0.95);
    }

    @media screen and (min-width: 1024px) {

        transition: background-color 80ms ease-in, border-color 80ms ease-in;

        &:hover {
            background-color: #00E6BB;
            border-color: #00E6BB;
        }
    }
`;
