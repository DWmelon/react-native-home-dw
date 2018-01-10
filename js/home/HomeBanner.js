import React,{ Component } from 'react';

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

import{
	View,
	StyleSheet,
	Text,
	ViewPagerAndroid,
	Image
} from 'react-native';

var imageRes = ['http://pic.qiantucdn.com/58pic/19/62/85/82458PICSYB_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
					'http://pic.qiantucdn.com/58pic/19/62/85/82458PICSYB_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center',
					'http://pic.qiantucdn.com/58pic/19/62/85/82458PICSYB_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center'];

var vpImg = (imgUrl,i) => {
	return <ImageVp key={i} imgUrl={imgUrl}/>	
};
	
var vpIndex = 0;



class ImageVp extends Component{

	render(){
		return(
			<View 
					style = {styles.container}>
				<Image 	style = {styles.image}
						source = {{uri:this.props.imgUrl}}>
				</Image>
			</View>
		);
	}

}


var vpCircular = (imgUrl,i) => <CircularVp key={i} index = {i}/>;

class CircularVp extends Component{

	render(){
		return(
			<View style = {[styles.circular,{backgroundColor : vpIndex === this.props.index?'rgba(210, 210, 210, 1.0)':'rgba(0, 0, 0, 0.3)'}]}/>
			// <View style = {styles.circular}/>
		);
	}

}



export default class HomeBanner extends Component{

	onPageSelected (e) {
		vpIndex = e.nativeEvent.position;
    	this.forceUpdate();
  	}

	render(){
		return(
			<View style={styles.container}>
				<ViewPagerAndroid 	style={styles.vp}
	      							initialPage={0}
	      							onPageSelected={this.onPageSelected.bind(this)}>
					{imageRes.map(vpImg)}								
				</ViewPagerAndroid>
				<View style={styles.circularC}>
					{imageRes.map(vpCircular)}
				</View>
			</View>
		);
	}

	

}

const circularRadius = 5;
const circularMargin = 5;

const styles = StyleSheet.create({
	container : {
		flex : 1,
		height : 206
	},
	vp : {
		flex : 1
	},
	image : {
		flex : 1
	},
	circularC:{
		flexDirection : 'row',
		bottom : 20,
		left : width/2 - imageRes.length/2 * (circularRadius * 2 + circularMargin * 2) + (imageRes%2 === 0?0:circularRadius)
	},
	circular:{
		width : circularRadius * 2,
		height : circularRadius * 2,
		marginLeft : circularMargin,
		marginRight : circularMargin,
		borderRadius : circularRadius,
		backgroundColor : 'black',
	}	
});

