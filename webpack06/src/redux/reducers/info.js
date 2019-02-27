import {
  LOGIN_INFO
} from '_redux/constants/ActionTypes'


const initialState = {
  	info: '',
};

function myinfo(state = initialState, action){
	switch (action.type) {
	    case LOGIN_INFO:
	      	return Object.assign({}, state, {
	        	visibilityFilter: action.filter || 'test01'
	      	})
	    default:
	      	return state
	}
}

export default myinfo;