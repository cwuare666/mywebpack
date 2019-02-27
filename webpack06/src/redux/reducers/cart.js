import {
  ADD_TO_CART
} from '_redux/constants/ActionTypes'


const initialState = {
  	visibilityFilter: 'test',
  	products: 'none'
};

function todos(state = initialState, action){
	switch (action.type) {
	    case ADD_TO_CART:
	      	return Object.assign({}, state, {
	        	visibilityFilter: action.filter || 'test01'
	      	})
	    default:
	      	return state
	}
}

export default todos;