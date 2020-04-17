import React, { Component } from 'react';
import { View } from 'react-native';

export default class Pipe extends Component {
    render(){
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        return (
            <View
                style = {{
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: width, 
                    height: height, 
                    overflow: 'hidden',
                    flexDirection: 'column',
                }}
            />
        )
    }
}