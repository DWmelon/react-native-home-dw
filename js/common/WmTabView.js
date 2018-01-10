import React,{ Component } from 'react';

import{
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback
} from 'react-native';





class WmTabItem extends Component{

	render(){
		return(
			<TouchableWithoutFeedback 
			onPress={() => this.props.callbackParent(this.props.position)}
			>
					<View style = {styles.item}>
						<Text style = {[styles.text,{color : this.props.position === this.props.index?'#00aff0':'#9E9EAE'}]}>{this.props.text}</Text>
						<View style = {[styles.line,{backgroundColor : this.props.position === this.props.index?'#00aff0':'white'}]}/>
					</View>
				</TouchableWithoutFeedback>
		);
	}

}



export default class WmTabView extends Component{

	constructor(props) {  
		super(props);  
  	}  

	renderItem(text,i){
		return <WmTabItem key={i} index={this.props.index}  text = {text} position = {i}
		callbackParent={(val) => {this.onTabClick(val)}} 
		/>	
	};

	onTabClick(index : int){	
		this.props.callbackParent(index);
	}

	render(){
		return(
			<View style = {styles.container}>
				{this.props.content.map((item,i)=>this.renderItem(item,i))}
			</View>
		);
	}

}


const styles = StyleSheet.create({
	container : {
		height : 50,
		flexDirection : 'row',
		backgroundColor : 'white'
	},
	item : {
		flex : 1
	},
	text : {
		flex : 1,
		textAlignVertical : 'center',
		textAlign : 'center'
	},
	line : {
		height : 3
	}
});