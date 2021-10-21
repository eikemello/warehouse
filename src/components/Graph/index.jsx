import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
} from 'react-vis';
const data=[{ x: 1 , y: 4 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 6 }, { x: 5, y: 2 }];

export default class Example extends React.Component {
    
    
    render() {

        return (
                <XYPlot width={600} height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={data} />
                </XYPlot>
        );
    }
}