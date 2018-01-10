import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	Text,
	ViewPagerAndroid,
	Image,
	TouchableNativeFeedback
} from 'react-native';


var imgRes = [	require('../img/icon_home_sch_list.png'),
				require('../img/icon_home_sch_rank.png'),
				require('../img/icon_home_major_list.png'),
				require('../img/icon_home_major_rank.png')];


var textTitle = [	'院校大全',
					'院校排行榜',
					'专业大全',
					'专业排行榜'];

var textTip = [		'数据涵盖2000多所高校',
					'多维度评析院校实力',
					'详细解读各专业学科',
					'薪酬比拼展示专业前景'];

class HomeBasicItem extends Component{

	render(){
		return(
			<TouchableNativeFeedback 	style = {{flex : 1}}
										background={TouchableNativeFeedback.SelectableBackground()}>
				<View style = {styles.content}
						borderWidth = {0.5}
						borderColor = '#F5F5F5'>
					<Image style = {{width : 30,height : 30}} source = {this.props.imgRes}/>
					<View style = {{marginLeft : 10}}>
						<Text style = {styles.title}>{this.props.title}</Text>
						<Text style = {styles.tip}>{this.props.tip}</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

}
// <View style = {{width:1,backgroundColor:'#E2E7E9'}}/>
// <View style = {{height:0.5,backgroundColor:'#E2E7E9'}}/>
export default class HomeBasic extends Component{

	render(){
		return(
			<View style = {styles.container}>
				<View style = {styles.contentRow}>
					<HomeBasicItem imgRes={imgRes[0]} title={textTitle[0]} tip={textTip[0]}/>
					
					<HomeBasicItem imgRes={imgRes[1]} title={textTitle[1]} tip={textTip[1]}/>
				</View>
				
				<View  style = {styles.contentRow}>
					<HomeBasicItem imgRes={imgRes[2]} title={textTitle[2]} tip={textTip[2]}/>
					
					<HomeBasicItem imgRes={imgRes[3]} title={textTitle[3]} tip={textTip[3]}/>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container : {
		flex : 1
	},
	contentRow : {
		flexDirection : 'row',
		height : 80
	},
	content : {
		flex : 1,
		flexDirection : 'row',
		alignItems : 'center',
		paddingLeft : 17
	},
	title : {
		fontSize : 16,
		color : '#39394A'
	},
	tip : {
		fontSize : 11,
		color : '#CAC8D4'
	}

});