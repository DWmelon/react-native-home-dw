import React,{ Component } from 'react';

import {Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

import{
	View,
	Text,
	StyleSheet,
	ViewPagerAndroid,
	Image,
	ListView,
	TouchableNativeFeedback
} from 'react-native'

var indexCount = [0,1];

var vpIndex = 0;

var vpCircular = (index,i) => <CircularVp key={i} index = {index}/>;

class CircularVp extends Component{

	render(){
		return(
			<View style = {[styles.circular,{backgroundColor : vpIndex === this.props.index?'#00AFF0':'#E2E7E9'}]}/>
		);
	}

}

class FuncItem extends Component{
	render(){
		return(
			<TouchableNativeFeedback 	underlayColor='#000000'
										background={TouchableNativeFeedback.SelectableBackground()}>
			<View style = {styles.item}>
				
				<Image 	style = {{width : 25,height : 25}}
						source = {this.props.data.img}/>
				<Text style = {styles.itemText}>
					{this.props.data.title}
				</Text>
				
			</View>
			</TouchableNativeFeedback>
		);
	}
}

const data1 = [	{title : '能上的学校',	img : require('../img/icon_home_access_sch.png')},
		 		{title : '适合的专业',	img : require('../img/icon_home_access_major.png')},
				{title : '按公司推荐',	img : require('../img/icon_home_company.png')},
				{title : '测录取概率',	img : require('../img/icon_home_safe_ratio.png')},
				{title : '自我测评',		img : require('../img/icon_home_ceping.png')},
				{title : '成绩分析报告',	img : require('../img/icon_home_same_stu_go.png')},
				{title : '看学校就业',	img : require('../img/icon_home_employ_sch.png')},
				{title : '看专业就业',	img : require('../img/icon_home_employ_major.png')}];

const data2 = [	{title : '按职业选专业',	img : require('../img/icon_home_zhineng.png')},
			 	{title : '学校录取查询',	img : require('../img/icon_home_enroll_search.png')},
				{title : '模拟填志愿',	img : require('../img/icon_home_write_zyb.png')},
				{title : '批次线查询',	img : require('../img/icon_home_score_line.png')},
				{title : '填报政策解读',	img : require('../img/icon_home_policy_explanation.png')}];

export default class HomeFunc extends Component{

	

	

	constructor(props) {
	  super(props);
	  var ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	  this.state = {
	    dataSource1: ds1.cloneWithRows(data1),
	    dataSource2: ds2.cloneWithRows(data2)
	  };
	}

	onPageSelected (e) {
		vpIndex = e.nativeEvent.position;
    	this.forceUpdate();
  	}
				
	render(){
		

		return(
			<View style = {styles.container}>
				<ViewPagerAndroid 	style = {styles.vp}
									initialPage={0}
	      							onPageSelected={this.onPageSelected.bind(this)}>
					<View style = {styles.page}>
						<ListView 	contentContainerStyle = {styles.listView}
									horizontal={true}
					      			dataSource={this.state.dataSource1}
					      			renderRow={(rowData) => <FuncItem data = {rowData}/>}
				    	/>
					</View>
					<View style = {styles.page}>
						<ListView 	contentContainerStyle = {styles.listView}
									horizontal={true}
					      			dataSource={this.state.dataSource2}
					      			renderRow={(rowData) => <FuncItem data = {rowData}/>}
				    	/>
					</View>
				</ViewPagerAndroid>
				<View style={styles.circularC}>
					{indexCount.map(vpCircular)}
				</View>
			</View>
		
		);
	}

}

const circularRadius = 3.5;
const circularMargin = 7;
const listViewHeight = 190;

const styles = StyleSheet.create({
	container : {
		flex : 1,
		marginTop : 10
	},
	vp : {
		flex : 1,
		height : listViewHeight
	},
	page : {
		flex : 1,
		backgroundColor : 'white'	
	},
	listView : {

		flexDirection : 'row',
		flexWrap : 'wrap',
		width : width
	},
	item : {
		width : width/4,
		height : listViewHeight/2,
		justifyContent : 'center',
		alignItems : 'center'
	},
	itemText : {
		fontSize : 13,
		color : '#5D5F5F',
		marginTop : 6
	},
	circularC:{
		flexDirection : 'row',
		marginBottom : 18,
		left : width/2 - indexCount.length/2 * (circularRadius * 2 + circularMargin * 2) + (indexCount.length%2 === 0?0:circularRadius)
	},
	circular:{
		width : circularRadius * 2,
		height : circularRadius * 2,
		marginLeft : circularMargin,
		marginRight : circularMargin,
		borderRadius : circularRadius
	}	
	
});