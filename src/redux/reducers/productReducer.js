const initialState = {
  products:[
    {
      id: 1,
      title: "juwon",
      category: "programmer"
    }
  ]
  

}

export const productReducer = (state, {type, payload}) => {
switch (type) {
  case ActionTypes.SET_PRODUCTS:
    
    break;

  default:
    break;
}
}