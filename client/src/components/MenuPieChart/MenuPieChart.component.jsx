import { PieChart } from 'react-minimal-pie-chart';
import {
    MenuPieChartWrapper,
    MenuPieChartContainer,
    MenuPieChartTextContainer,
    MenuPieChartValueDiv,
    MenuPieChartValue,
    MenuPieChartValueType,
    MenuPieChartPercentage,
} from './MenuPieChart.styles';

const MenuPieChart = (props) => {
    const { calories } = props;
    const carbs = props.carbohydrates_total_g;
    const proteins = props.protein_g;
    const fats = props.fat_total_g;

    const data = [
        {
            title: 'Proteins',
            value: proteins,
            color: '#9633E8',
        },
        {
            title: 'Carbs',
            value: carbs,
            color: '#329C13',
        },
        {
            title: 'Fats',
            value: fats,
            color: '#E81005',
        },
    ];

    const calculatePercentage = (amount) =>
        Math.round((amount / (carbs + proteins + fats)) * 100);

    return (
        <MenuPieChartWrapper>
            <MenuPieChartContainer>
                <PieChart animate={true} data={data}></PieChart>
            </MenuPieChartContainer>
            <MenuPieChartTextContainer>
                <MenuPieChartValueDiv>
                    <MenuPieChartPercentage style={{ color: '#329C13' }}>
                        {<br />}
                    </MenuPieChartPercentage>
                    <MenuPieChartValue>{calories}</MenuPieChartValue>
                    <MenuPieChartValueType>Calories</MenuPieChartValueType>
                </MenuPieChartValueDiv>
                <MenuPieChartValueDiv>
                    <MenuPieChartPercentage style={{ color: '#329C13' }}>
                        {calculatePercentage(carbs)}%
                    </MenuPieChartPercentage>
                    <MenuPieChartValue>{carbs}g</MenuPieChartValue>
                    <MenuPieChartValueType>Carbs</MenuPieChartValueType>
                </MenuPieChartValueDiv>
                <MenuPieChartValueDiv>
                    <MenuPieChartPercentage style={{ color: '#E81005' }}>
                        {calculatePercentage(fats)}%
                    </MenuPieChartPercentage>
                    <MenuPieChartValue>{fats}g</MenuPieChartValue>
                    <MenuPieChartValueType>Fat</MenuPieChartValueType>
                </MenuPieChartValueDiv>
                <MenuPieChartValueDiv>
                    <MenuPieChartPercentage style={{ color: '#9633E8' }}>
                        {calculatePercentage(proteins)}%
                    </MenuPieChartPercentage>
                    <MenuPieChartValue>{proteins}g</MenuPieChartValue>
                    <MenuPieChartValueType>Proteins</MenuPieChartValueType>
                </MenuPieChartValueDiv>
            </MenuPieChartTextContainer>
        </MenuPieChartWrapper>
    );
};

export default MenuPieChart;
