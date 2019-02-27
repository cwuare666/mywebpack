import React, { Component } from 'react';

import { connect } from 'react-redux'

import { addToCart, setInfoFn } from '_redux/actions'

require('./style.scss');

import pic from '_image/page/man.png';

class TodoList extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(2222, this.props);
	}
	testClick = () => {
		this.props.addToCart(2)
	}
	render(){
		return(
			<div className="about-content">
				this is about!
				<img src={pic} alt="" />
				<div className="iconfont icon-idcard"></div>
				<div onClick={() => this.testClick(2)}>点击</div>
				<div>{this.props.store.todos.visibilityFilter}</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	store: state
})

const About = connect(
	mapStateToProps,
  	{addToCart, setInfoFn}
)(TodoList)
export default About;