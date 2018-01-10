import React,{ Component } from 'react';


import{
	View,
	StyleSheet,
	ScrollView,
	Text,
	Image,
	ViewPagerAndroid
} from 'react-native';

import HomeBanner from './HomeBanner';
import HomeIntelligent from './HomeIntelligent';
import HomeFunc from './HomeFunc'; 
import HomeBasic from './HomeBasic'; 

import WmBgLine from '../common/WmBgLine';

export default class Home extends Component{


	render(){
		return(
			<ScrollView style = {styles.container}>
				<View style = {styles.root}>
					<HomeBanner style = {styles.banner}/>
					<View style = {styles.info}>
						<Text>
							广东 理科 <Text style = {{fontWeight: 'bold'}}>580</Text> 分
						</Text>
						<Image 	style = {styles.imagePen}
								source = {require('../img/icon_editor_white.png')}/>
					</View>
					<HomeIntelligent/>
					<HomeFunc/>
					<WmBgLine height={9}/>
					<HomeBasic/>
					<View style = {styles.bottom}>
						<View style = {styles.bottomLine}/>
						<Text style = {styles.bottomText}>神秘功能敬请期待</Text>
						<View style = {styles.bottomLine}/>
					</View>
				</View>
			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	container : {
		flex : 1
	},
	root : {
		flex : 1,
		backgroundColor : 'white',
		justifyContent : 'center'
	},
	banner : {
		height : 206
	},
	image:{
		width : 30,
		height : 30
	},
	imagePen : {
		marginLeft : 5,
		width : 14,
		height : 14
	},
	info : {
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection : 'row',
		paddingTop : 10,
		marginLeft : 20,
		
	},
	bottom : {
		paddingTop : 17,
		paddingBottom : 17,
		backgroundColor : '#F5F5F5',
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center'
	},
	bottomText : {
		fontSize : 12,
		color : '#9E9EAE',
		marginLeft : 18,
		marginRight : 18
	},
	bottomLine : {
		backgroundColor : '#E2E7E9',
		height : 0.5,
		width : 32
	}
});