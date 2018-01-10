import React,{ Component } from 'react';

import{
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';


export default class HomeIntelligent extends Component{

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.button}>
					<View style = {styles.leftContent}>
						<Image 	style = {{width : 30,height : 30}}
								source = {require('../img/icon_home_intelligent_icon.png')}/>
					</View>
					<Text style = {styles.text}>智能填志愿</Text>
					<View style = {styles.rightContent}>
						<Image 	style = {{width : 40,height : 40,marginRight : 14}}
								source = {require('../img/icon_intelligent_oval.png')}/>
					</View>	
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'white'
	},
	button : {
		height : 64,
		borderRadius : 3,
		flexDirection : 'row',
		alignItems : 'center',
		marginLeft : 12,
		marginRight : 12,
		marginTop : 18,
		backgroundColor : '#2E82FF'
	},
	leftContent : {
		width : 62,
		height : 64,
		borderTopLeftRadius : 3,
		borderBottomLeftRadius : 3,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#2477F1'
	},
	text : {
		fontSize : 18,
		fontWeight : 'bold',
		color : 'white',
		textAlign : 'center',
		marginLeft : 13
	},
	rightContent : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'flex-end'
	}
});