import MacrosForm from '../../../components/Forms/MacrosForm/MacrosForm.component';
import MacrosHelpSection from '../../../components/MacrosHelpSection/MacrosHelpSection.component';
import {
    MacrosPageDetails,
    MacrosPageTitle,
    MacrosPageWrapper,
} from './MacrosPage.styles';

const MacrosPage = () => {
    return (
        <MacrosPageWrapper>
            <MacrosPageTitle>My Macros</MacrosPageTitle>
            <MacrosForm />
            <MacrosPageDetails>
                <MacrosHelpSection />
            </MacrosPageDetails>
        </MacrosPageWrapper>
    );
};

export default MacrosPage;
