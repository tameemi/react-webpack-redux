import React, { Component } from "react";


import {connect} from 'react-redux';

import { updateUser } from './actions/user-actions';

class App extends Component {
	 constructor(props) {
	    super(props);
	    this.state = {user: 0};
			this.handleChange = this.handleChange.bind(this);
			this.onUpdateUser = this.onUpdateUser.bind(this);

	  }

	handleChange(event) {
	    this.setState({
	    	user: event.target.value
	    }, () => {
	    	console.log(this.state.user);// called after name has changed
	    });
	  }
	componentDidMount() {
		console.log('props are', this.props);
		console.log('did mount')
	  }
	componentDidUpdate(props, states){
	  	console.log(props);
	}
	onUpdateUser(event) {
		this.props.onUpdateUser(event.target.value);
	}
    render() {
        return (
        	<div> 
			<div>{this.props.user}</div>
			 <input type="text" onChange={this.onUpdateUser} />
			</div>
					
        	);
    }
}
const mapStateToProps = (state, props) => {
	return {
			products: state.products,
			user: state.user,
			userPlusProp: `${state.user} ${props.passProp}`
	}

};

const mapActionsToProps = {
	onUpdateUser: updateUser
};



export default connect(mapStateToProps, mapActionsToProps)(App);