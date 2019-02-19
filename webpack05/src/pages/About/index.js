import React, { Component } from 'react';

import { connect } from 'react-redux'

import { addToCart } from '_redux/actions'

require('./style.scss');

import pic from '_image/page/man.png';

class TodoList extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props.todos)
	}
	componentWillMount(){
		console.log(2222, this.props);
	}
	testClick = () => {
		//console.log(this.props.addToCart)
		debugger
		this.props.addToCart(2)

		setTimeout(() => {
			console.log(22223, this.props);
			console.log(this.props.todos)
		}, 1000)
		//addToCart(2)
	}
	render(){
		return(
			<div className="about-content">
				this is about!
				<img src={pic} alt="" />
				<div className="iconfont icon-idcard"></div>
				<div onClick={() => this.testClick(2)}>点击</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	todos: state
})

const About = connect(
	mapStateToProps,
  	{addToCart}
)(TodoList)
export default About;