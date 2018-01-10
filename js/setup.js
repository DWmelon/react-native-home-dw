/**
	可以做一些全局初始化工作
**/


import React,{Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Splash from './Splash';

function setup(): ReactClass<{}>{

	class AppEnter extends Component{
		render(){
			return(
				<View style={styles.container}>
					<Splash/>
		      	</View>
			);
		}
	}

	return AppEnter;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});



module.exports = setup;