import React, { Component } from 'react';
import { View } from 'react-native';

export default class Bird extends Component {
    render(){
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.postion.x - width /2;
        const y = this.props.body.postion.y - height /2;

        return (
            <View
                style = {{
                    postion: 'absolute',
                    top: y,
                    left: x,
                    width: width, 
                    height: height, 
                    backgroundColor: this.props.color,
                }}
            />
        )
    }
}