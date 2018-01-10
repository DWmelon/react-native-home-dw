import React,{ Component } from 'react';

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

import{
	View,
	StyleSheet
} from 'react-native';

export default class WmLine extends Component{

	render(){
		return(
			<View style = {styles.line}/>
		);
	}

}

const styles = StyleSheet.create({
	line:{
		width:width,
		height:0.5,
		backgroundColor:'#E1E1E1'
	}
});