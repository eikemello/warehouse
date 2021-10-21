import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';

import {
    XYPlot,
    XAxis,
    YAxis,
    ChartLabel,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    LineSeriesCanvas,
    LineMarkSeries
} from 'react-vis';
import { maxHeight, maxWidth } from '@mui/system';
const timestamp = new Date('September 9 2017').getTime();
const data=[{ x: 1 , y: 4 }, { x: 2, y: 5 }, { x: 3, y: 3 }, { x: 4, y: 6 }, { x: 5, y: 2 }];

export default class Example extends React.Component {
    
    
    render() {

        return (
                <XYPlot width={500} height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <LineSeries data={data} />
                </XYPlot>
        );
    }
}