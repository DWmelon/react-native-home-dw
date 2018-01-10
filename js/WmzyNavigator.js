import React,{ Component } from 'react';

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

import WmTab from './WmTab';
import Home from './home/Home';
import GkInfo from './info/GkInfo';
import MyRoom from './me/MyRoom';

import{
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class WmzyNavigator extends Component{

	constructor(props) {
    	super(props);  
    	this.state = { tab : 'home-first' };  
    	// this.onTabChange = this.onTabChange.bind(this);
  	}

	onTabChange(tab : string){
		if (this.state.tab !== tab) {
			this.setState({tab:tab});
			// this.console.log(tab);
		}
	}

	renderContent() {
		switch(this.state.tab){
			case 'home-first':{
				console.log('1');
				return <Home/>
			}
			case 'home-second':{
				console.log('2');
				return <GkInfo/>	
			}
			case 'home-third':{
				console.log('3');
				return <MyRoom/>	
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<WmTab callbackParent={(val) => {this.onTabChange(val)}}/>
				<View style = {styles.content}>
					{this.renderContent()}
				</View>
			</View>
		);
	}
};


const styles = StyleSheet.create({
	container:{
		flex : 1,
		width : width,
		flexDirection : 'column-reverse',
	},
	content:{
		flex : 1,
		// backgroundColor : '#F5F5F5',
		flexDirection : 'column',
	},
	
	text:{
		color : 'white',
	}
});