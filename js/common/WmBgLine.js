import React,{ Component } from 'react';

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

import{
	View
} from 'react-native';

export default class WmBgLine extends Component{

	render(){
		return(
			<View style = {{height : this.props.height,backgroundColor:'#F5F5F5'}}/>
		);
	}

}