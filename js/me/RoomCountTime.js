import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	Image,
	Text
} from 'react-native';




export default class RoomCountTime extends Component{

	render(){
		return(
			<View>
				
				<View style = {styles.content}>
					<Image 	style = {{width : 18,height : 18}}
							source = {require('../img/icon_me_clock.png')}/>
					<Text style = {styles.light}>距2016年高考还有 <Text style = {styles.dark}>132</Text> 天</Text>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	content : {
		height : 40,
		flexDirection : 'row',
		alignItems : 'center',
		paddingLeft : 23,
		backgroundColor : 'white'
	},
	light : {
		marginLeft : 7,
		color : '#9E9EAE',
		fontSize : 13
	},
	dark : {
		color : '#39394A',
		fontSize : 13
	}

});