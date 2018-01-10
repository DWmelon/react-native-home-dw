import React,{ Component } from 'react';

import{
	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native';

import WmzyNavigator from './WmzyNavigator';

export default class Splash extends Component{
	render(){
		return(
			<View style={styles.container}>
				<StatusBar
					translucent={true}
          			backgroundColor="rgba(0, 0, 0, 0.2)"
          			barStyle="light-content"
          		/>
				<WmzyNavigator/>
			</View>
		);
	}
};
const styles = StyleSheet.create({
	container :{
		flex : 1,
		justifyContent: 'center'
	},
});
