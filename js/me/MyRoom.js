import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	ScrollView
} from 'react-native';

import WmTopBar from '../common/WmTopBar';
import WmBgLine from '../common/WmBgLine';
import RoomPerson from './RoomPerson';
import RoomCountTime from './RoomCountTime';
import RoomList from './RoomList';


export default class Room extends Component{


	render(){
		return(
			<View style={styles.container}>
				<WmTopBar isShowBack = {false} title = '我的'/>
				<ScrollView style = {{flex : 1}}>
					<View style = {{flex : 1,backgroundColor : 'white'}}>
						<WmBgLine height = {8}/>
						<RoomPerson/>
						<WmBgLine height = {2}/>
						<RoomCountTime/>
						<WmBgLine height = {7.5}/>
						<RoomList/>	
					</View>
				</ScrollView>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'black'
	}
});