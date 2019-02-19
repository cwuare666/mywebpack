import * as types from '_redux/constants/ActionTypes';



const addToCartUnsafe = productId => ({
	type: types.ADD_TO_CART,   //与redcers 下面的 switch 判定type 一致就能定位到该变量
	productId
})

export const addToCart = productId => (dispatch, getState) => {
  // if (getState().products.byId[productId].inventory > 0) {
  //   dispatch(addToCartUnsafe(productId))
  // }
  dispatch(addToCartUnsafe(productId))
}