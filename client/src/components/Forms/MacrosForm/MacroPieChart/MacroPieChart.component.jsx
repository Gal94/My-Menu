import { PieChart } from 'react-minimal-pie-chart';
import {
    MacroPieChartLegend,
    MacroPieChartText,
    MacroPieWrapper,
} from './MacroPieChart.styles';

//(value * 4) / calories * 100

const MacroPieChart = (props) => {
    const calories = props.values.calories === 0 ? 2000 : props.values.calories;

    const data = [
        {
            title: 'Proteins',
            value: props.values.proteins === 0 ? 1 : props.values.proteins,
            color: '#E38627',
        },
        {
            title: 'Carbs',
            value: props.values.carbs === 0 ? 1 : props.values.carbs,
            color: '#C13C37',
        },
        {
            title: 'Fats',
            value: props.values.fats === 0 ? 1 : props.values.fats,
            color: '#6A2135',
        },
    ];

    const MultiplyBy = (title) => {
        if (title === 'Fats') {
            return 9;
        }
        return 4;
    };

    return (
        <MacroPieWrapper>
            <div>
                <PieChart
                    animate={true}
                    label={({ dataEntry }) =>
                        `${Math.round(
                            ((dataEntry.value * MultiplyBy(dataEntry.title)) /
                                calories) *
                                100
                        )} %`
                    }
                    labelStyle={(index) => ({
                        fontSize: '6px',
                        fontWeight: 'bold',
                    })}
                    data={data}
                    labelPosition={60}
                    radius={40}
                />
            </div>
            <MacroPieChartLegend>
                <div>
                    <div
                        style={{
                            display: 'inline-block',
                            width: '14px',
                            height: '14px',
                            backgroundColor: '#C13C37',
                        }}
                    />
                    <MacroPieChartText>Carbs</MacroPieChartText>
                </div>
                <div>
                    <div
                        style={{
                            display: 'inline-block',
                            width: '14px',
                            height: '14px',
                            backgroundColor: '#E38627',
                        }}
                    />
                    <MacroPieChartText>Proteins</MacroPieChartText>
                </div>
                <div>
                    <div
                        style={{
                            display: 'inline-block',
                            width: '14px',
                            height: '14px',
                            backgroundColor: '#6A2135',
                        }}
                    />
                    <MacroPieChartText>Fats</MacroPieChartText>
                </div>
            </MacroPieChartLegend>
        </MacroPieWrapper>
    );
};

export default MacroPieChart;
