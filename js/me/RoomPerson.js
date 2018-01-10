import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	Image,
	Text
} from 'react-native';

export default class RoomPerson extends Component{

	render(){
		return(
			<View style = {styles.container}>
				<Image 	style = {styles.icon}
						source = {require('../img/icon_me_logo.png')}/>
				<View style = {styles.right}>
					<View style = {styles.content}>
						<Text style = {styles.name}>工藤新一</Text>
						<Image 	style = {{width : 14,height : 12,marginLeft : 5}}
								source = {require('../img/icon_vip.png')}/>
					</View>
					<View style = {[styles.content,{marginTop : 13}]}>
						<Text style = {styles.info}>广东  文科  730分</Text>
						<Image 	style = {{width : 14,height : 14,marginLeft : 10}}
								source = {require('../img/icon_editor_gray.png')}/>
					</View>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container : {
		height : 100,
		flexDirection : 'row',
		alignItems : 'center',
		backgroundColor : 'white'
	},
	right : {
		marginLeft : 27
	},
	icon : {
		width : 70,
		height : 70,
		borderRadius : 35,
		marginLeft : 21
	},
	content : {
		flexDirection : 'row',
		alignItems : 'center'
	},
	name : {
		color : '#39394A',
		fontSize : 18
	},
	info : {
		color : '#9E9EAE',
		fontSize : 14
	}

});