import React,{ Component } from 'react';

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

import{
	View,
	StyleSheet,
	Image,
	Text

} from 'react-native';


import WmLine from '../common/WmLine';

export default class WmTopBar extends Component{

	render(){
		return(
			<View>
				<View 	style = {styles.content}>
					{this.props.isShowBack?<Image 	style = {styles.left}
							source = {require('../img/icon_back.png')}/>:null}
					<Text 	style = {styles.title}>{this.props.title}</Text>					
					{this.props.isShowBack?<View  style = {styles.right}/>:null}
				</View>
				<WmLine/>

			</View>
		);
	}

}

const styles = StyleSheet.create({
	content : {
		paddingTop : 25,
		height : 70,
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'white'
	},
	left : {
		width : 13,
		height : 20,
		marginLeft : 25
	},
	title : {
		color : '#39394A',
		fontSize : 15,
		flex : 1,
		textAlign : 'center'
	},
	right : {
		width : 38
	}


});