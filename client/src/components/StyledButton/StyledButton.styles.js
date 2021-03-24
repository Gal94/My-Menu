import Styled from 'styled-components';

export const StyledButtonContainer = Styled.div`
    border: 2px solid white;
    border-top: 2.5px solid;
    border-left: 2.5px solid;
    width: fit-content;
    padding: .5rem 1rem;
    margin-top: .5rem;
    color: white;
    cursor: pointer;
    z-index: 1;
    text-shadow: -0.5px -0.5px #215218;

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
        position: relative;
        background: transparent;
        
        &:before {
            content: "";
            position: absolute;
            background: #70ff57c0;
            bottom: 0;
            left: 0;
            right: 0;
            top: 100%;
            z-index: -1;
            transition: top 0.09s ease-in;
          }

        &:hover:before {
            top: 0;
          }

    }
`;

export const Chevron = Styled.div`
    border-style: solid;
    border-color: white;
    border-width: 0.25em 0.25em 0 0;
    height: 1rem;
    opacity: 0.8;
    position: relative;
    vertical-align: top;
    width: 1rem;
    margin: 0 auto;
	transform: rotate(135deg);
    display: flex;

    @media screen and (min-width: 1024px) {
        animation: pulse 4s ease-out infinite;
    }


    @keyframes pulse {
        0% {
            transform: scale(1) rotate(135deg);
        } 40% {
            transform: scale(1.3) rotate(135deg);
        } 80% {
            transform: scale(1) rotate(135deg);
        }
    }
}
`;
