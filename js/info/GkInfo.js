import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	ViewPagerAndroid
} from 'react-native';

import WmTabView from '../common/WmTabView';
import WmTopBar from '../common/WmTopBar';


export default class GkInfo extends Component{

	constructor(props) {  
    super(props);  
    this.state = { index : 0 };  

  	}  

	onTabClick(index : int){
		if (this.state.index !== index) {
			this.setState({index:index});
		}
	}

	onPageSelected (e) {
		vpIndex = e.nativeEvent.position;
    	if (this.state.index !== vpIndex) {
			this.setState({index:vpIndex});
		}
  	}

	

	render(){
		const content = [	'家长学堂',
							'高考政策',
							'高考攻略',
							'省市政策'];

		return(
			<View style={styles.container}>
				<WmTopBar isShowBack = {false} title = '高考攻略'/>
				<WmTabView 		callbackParent={(val) => {this.onTabClick(val)}} 
									index = {this.state.index}
									content = {content}/>
				
			</View>
			
		);
	}



}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'green'
	}
});