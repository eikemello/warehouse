import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    LabelSeries,
    Hint
} from 'react-vis';


const blueData = [
    { x: 'Pendrive', y: 15 },
    { x: 'Tablet', y: 15 },
    { x: 'Software', y: 35 },
    { x: 'Loader', y: 59 },
    { x: 'Handset', y: 60 },
    { x: 'Book', y: 85 },
    { x: 'Keyboard', y: 89 },
    { x: 'Mouse', y: 103 },
    { x: 'Smartphone', y: 167 },
    { x: 'Monitor', y: 264 },
    { x: 'Notebook', y: 348 }];

const greenData = [
    { x: 'Pendrive', y: 15 },
    { x: 'Tablet', y: 15 },
    { x: 'Software', y: 33 },
    { x: 'Loader', y: 58 },
    { x: 'Handset', y: 60 },
    { x: 'Book', y: 85 },
    { x: 'Keyboard', y: 88 },
    { x: 'Mouse', y: 98 },
    { x: 'Smartphone', y: 164 },
    { x: 'Monitor', y: 258 },
    { x: 'Notebook', y: 341 },];

const labelData = greenData.map((d, idx) => ({ 
    x: d.x,
    y: (greenData[idx].y - blueData[idx].y)
    //y: (greenData[idx].y - blueData[idx].y) +" / "+ Math.max(greenData[idx].y, blueData[idx].y)
    //y: Math.max(greenData[idx].y, blueData[idx].y)
}));


export default class Example extends React.Component {
    state = {
        value: false,
        X: null,
        Y: null
    };


    render() {
        const { value } = this.state;

        return (
            <>
                <div>
                    <XYPlot xType="ordinal" width={1800} height={500} xDistance={100}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis title="ASSETS" />
                        <VerticalBarSeries color="#b1c0cd" data={greenData}
                            onValueClick={(datapoint, event) => {
                                console.log(event.event.screenY, event.event.screenX)
                                this.setState({ value: datapoint.y, X: event.event.screenX, Y: event.event.screenY })
                            }} />
                        <VerticalBarSeries color="#084d6e" data={blueData} 
                            onValueClick={(datapoint, event) => {
                                console.log(event.event.screenY, event.event.screenX)
                                this.setState({ value: datapoint.y, X: event.event.screenX, Y: event.event.screenY })
                            }} />
                        {value && <Hint value={value} style={{
                            fontSize: 19,
                            color: '#084d6e',
                            marginLeft: this.state.X-30,
                        }}>{value}</Hint>}
                        <LabelSeries marginTop="5px" data={labelData} getLabel={d => d.y} style={{
                            fontSize: 19,
                            stroke: 'red',
                        }}/>
                    </XYPlot>
                </div>
            </>
        );
    }
}