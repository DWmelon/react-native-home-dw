import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	Image,
	Text,
	TouchableNativeFeedback
} from 'react-native';

import WmBgLine from '../common/WmBgLine';

var imgRes = [	require('../img/icon_me_like.png'),
				require('../img/icon_me_vip.png'),
				require('../img/icon_me_promo.png'),
				require('../img/icon_me_invite.png'),
				require('../img/icon_me_setting.png'),
				require('../img/icon_me_help.png'),
				require('../img/icon_me_share.png'),
				require('../img/icon_me_good.png'),
				require('../img/icon_me_team.png'),
				require('../img/icon_me_about.png'),];

var content = [	'我的收藏',
				'白银VIP',
				'优惠码',
				'邀请好友/同学',
				'设置',
				'帮助中心',
				'分享给好友',
				'给我们好评',
				'研究团队',
				'关于我们',];


var tip = [	'学校、专业、职业、文章等',
			'去升级黄金VIP',
			'30元现金奖励',];

class RoomItem extends Component{

	render(){
		return(
			<TouchableNativeFeedback>
				<View style = {styles.item}>
					<Image 	style = {styles.itemIcon}
							resizeMode = 'stretch'
							source = {this.props.imgUrl}/>
					<Text style = {styles.itemText}>{this.props.content}</Text>
					<Image 	style = {styles.itemArrow}
							source = {require('../img/icon_arrow_right.png')}/>
				</View>
			</TouchableNativeFeedback>
		);
	}

}

class RoomDivideLine extends Component{

	render(){
		return(
			<View style = {{backgroundColor : 'white',paddingLeft : 62}}>
				<WmBgLine height = {1}/>
			</View>
		);
	}

}

export default class RoomList extends Component{

	render(){
		return(
			<View style = {{flex : 1}}>
				
				<RoomItem key = {0} imgUrl = {imgRes[0]} content = {content[0]}/>
				<WmBgLine height = {7.5}/>
				<RoomItem key = {1} imgUrl = {imgRes[1]} content = {content[1]}/>
				<RoomDivideLine/>
				<RoomItem key = {2} imgUrl = {imgRes[2]} content = {content[2]}/>
				<RoomDivideLine/>
				<RoomItem key = {3} imgUrl = {imgRes[3]} content = {content[3]}/>
				<WmBgLine height = {7.5}/>
				<RoomItem key = {4} imgUrl = {imgRes[4]} content = {content[4]}/>
				<RoomDivideLine/>
				<RoomItem key = {5} imgUrl = {imgRes[5]} content = {content[5]}/>
				<RoomDivideLine/>
				<RoomItem key = {6} imgUrl = {imgRes[6]} content = {content[6]}/>
				<RoomDivideLine/>
				<RoomItem key = {7} imgUrl = {imgRes[7]} content = {content[7]}/>
				<WmBgLine height = {7.5}/>
				<RoomItem key = {8} imgUrl = {imgRes[8]} content = {content[8]}/>
				<RoomDivideLine/>
				<RoomItem key = {9} imgUrl = {imgRes[9]} content = {content[9]}/>
				<WmBgLine height = {7.5}/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container : {

	},
	item : {
		flexDirection : 'row',
		height : 64,
		alignItems : 'center',
		backgroundColor : 'white'
	},
	itemIcon : {
		width : 24,
		height : 24,
		marginLeft : 21.5
	},
	itemText : {
		marginLeft : 15,
		flex : 1,
		fontSize : 16,
		color : '#39394A'
	},
	itemArrow : {
		width : 8,
		height : 13,
		marginRight : 27
	}
});