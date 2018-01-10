import React,{ Component } from 'react';

import{
	View
} from 'react-native';

class GkInfoPage extends Component{
	render(){
		return(
		
		);
	}
}

export default class GkInfoViewPager extends Component{

	renderPage(item,i){
		return <GkInfoPage key={i}/>
	}

	render(){
		return(
			<ViewPagerAndroid 	style={styles.vp}
	      							initialPage={0}
	      							onPageSelected={this.onPageSelected.bind(this)}>
				{this.props.content.map((item,i) => this.renderPage(item,i))}
			</ViewPagerAndroid>	
		);
	}

}