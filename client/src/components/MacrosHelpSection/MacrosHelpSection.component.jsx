import { useState } from 'react';
import {
    MacrosHelpTitle,
    MacrosHelpWrapper,
    PlusIcon,
    MacrosHelpInfoDiv,
} from './MacrosHelpSection.styles';

const MacrosHelpSection = () => {
    const [isActiveButton, setIsActiveButton] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
    });

    return (
        <MacrosHelpWrapper>
            <MacrosHelpTitle
                isActive={isActiveButton.first}
                onClick={() =>
                    setIsActiveButton({
                        ...isActiveButton,
                        first: !isActiveButton.first,
                    })
                }
            >
                What are macros
                <PlusIcon>{isActiveButton.first ? 'Ʌ' : 'V'}</PlusIcon>
            </MacrosHelpTitle>
            <MacrosHelpInfoDiv isActive={isActiveButton.first}>
                Macro is a short for micronutrient. Micronutrient are the three
                categories of nutrients you eat the most and provide you with
                most of your energy: protein, carbohydrates and fat.
            </MacrosHelpInfoDiv>
            <MacrosHelpTitle
                isActive={isActiveButton.second}
                onClick={() =>
                    setIsActiveButton({
                        ...isActiveButton,
                        second: !isActiveButton.second,
                    })
                }
            >
                Why should I count macros?
                <PlusIcon>{isActiveButton.second ? 'Ʌ' : 'V'}</PlusIcon>
            </MacrosHelpTitle>
            <MacrosHelpInfoDiv isActive={isActiveButton.second}>
                Keeping track of your macros can help you make (or plan to make)
                smart, healthy food choices. It’s similar to counting calories
                or points, but it takes the ideology one step further.
            </MacrosHelpInfoDiv>
            <MacrosHelpTitle
                isActive={isActiveButton.third}
                onClick={() =>
                    setIsActiveButton({
                        ...isActiveButton,
                        third: !isActiveButton.third,
                    })
                }
            >
                Counting calories VS macros
                <PlusIcon>{isActiveButton.third ? 'Ʌ' : 'V'}</PlusIcon>
            </MacrosHelpTitle>
            <MacrosHelpInfoDiv isActive={isActiveButton.third}>
                In the simplest terms, weight loss happens when you burn more
                calories than you consume. Macro counting helps you understand
                where those calories are coming from and how they affect your
                body. It also helps you understand that not all calories are
                created equal.
            </MacrosHelpInfoDiv>
            <MacrosHelpTitle
                isActive={isActiveButton.fourth}
                onClick={() =>
                    setIsActiveButton({
                        ...isActiveButton,
                        fourth: !isActiveButton.fourth,
                    })
                }
            >
                Guidelines for daily macro values
                <PlusIcon>{isActiveButton.fourth ? 'Ʌ' : 'V'}</PlusIcon>
            </MacrosHelpTitle>
            <MacrosHelpInfoDiv isActive={isActiveButton.fourth}>
                Between 10%-35% of your daily calories should come from protein,
                45%-65% from carbs and 20%-35% from fats. We recommend using{' '}
                <a href='https://www.calculator.net/macro-calculator.html?'>
                    this
                </a>{' '}
                macro calculator if you don't know your values yet.
            </MacrosHelpInfoDiv>
            <MacrosHelpTitle
                isActive={isActiveButton.fifth}
                onClick={() =>
                    setIsActiveButton({
                        ...isActiveButton,
                        fifth: !isActiveButton.fifth,
                    })
                }
            >
                Ready to get started?
                <PlusIcon>{isActiveButton.fifth ? 'Ʌ' : 'V'}</PlusIcon>
            </MacrosHelpTitle>
            <MacrosHelpInfoDiv isActive={isActiveButton.fifth}>
                Simply add the macros you've calculated based on your weight and
                goal, and proceed to the menu creation page. Upon building your
                menu we'll do all the calculations and track the nutrients for
                you.
            </MacrosHelpInfoDiv>
        </MacrosHelpWrapper>
    );
};

export default MacrosHelpSection;
