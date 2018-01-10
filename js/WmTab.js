import React,{ Component,PropTypes } from 'react';

import{
	View,
	Text,
	Image,
	StyleSheet,
	TouchableWithoutFeedback
} from 'react-native';

import WmLine from './common/WmLine';

export default class WmTab extends Component{

constructor(props) {  
    super(props);  
    this.state = { tab: 'home-first' };  

  }  
	
	onTabSelect (tab : string){
		if (this.state.tab !== tab) {
			this.setState({tab: tab});
			this.props.callbackParent(tab);
		}
		console.log(this.state.tab);
		console.log(tab);

	}

	render(){
		const image = [			require('./img/icon_tab_home.png'),
								require('./img/icon_tab_info.png'),
								require('./img/icon_tab_me.png')];

		const imageSelect = [	require('./img/icon_tab_home_pressed.png'),
								require('./img/icon_tab_info_pressed.png'),
								require('./img/icon_tab_me_pressed.png')];
		
		const str = [ 			'报志愿','高考攻略','我的'];
		


		return(
			<View style = {styles.container} key={this.state.tab}>
				<WmLine/>
			
				<View style = {styles.tab} >
					<TouchableWithoutFeedback 	style={styles.tabItem}
											onPress={this.onTabSelect.bind(this, 'home-first')}
											// onPress={() => console.log("onPress")}
											>
						<View 	style={styles.tabItem}>
							<Image 	style={styles.image}
									source={this.state.tab === 'home-first'?imageSelect[0]:image[0]} />
							<Text 	style = {styles.text,{color : this.state.tab === 'home-first'?'#00aff0':'#9E9EAE'}}>
								{str[0]}
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback 	style={styles.tabItem}
											onPress={this.onTabSelect.bind(this, 'home-second')}>
						<View 	style={styles.tabItem}>
							<Image 	style={styles.image}
									source={this.state.tab === 'home-second'?imageSelect[1]:image[1]}/>
							<Text 	style = {styles.text,{color : this.state.tab === 'home-second'?'#00aff0':'#9E9EAE'}}>
								{str[1]}
							</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback 	style={styles.tabItem}
											onPress={this.onTabSelect.bind(this, 'home-third')}>
						<View 	style={styles.tabItem}>
							<Image 	style={styles.image}
									source={this.state.tab === 'home-third'?imageSelect[2]:image[2]}/>
							<Text 	style = {styles.text,{color : this.state.tab === 'home-third'?'#00aff0':'#9E9EAE'}}>
								{str[2]}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}


}



const styles = StyleSheet.create({
	container:{
		height : 50
	},
	tab:{
		height : 49,
		flexDirection : 'row',
		backgroundColor : 'white'
	},
	image:{
		width : 30,
		height : 30
	},
	tabItem:{
		flex : 1,
		justifyContent: 'center',
		alignItems : 'center'
	},
	text:{
		color : '#9E9EAE',
		fontSize : 11
	}
});