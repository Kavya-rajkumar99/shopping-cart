export const reducer = (state,action) =>{
    console.log("In reducer")
    switch(action.type){
        case "REMOVE_ITEM" : return{
            ...state,
            items : state.items.filter((item)=>item.id!==action.payload)
        }
        case "CLEAR_CART" : return{
            ...state,
            items : []
        }
        case "INCREMENT" : 
        const updatedCart = state.items.map((item)=>{
            if(item.id===action.payload){
                return {...item,quantity:item.quantity+1}
            }
            return item
        })
        return{
            ...state,
           items : updatedCart
        }
        case "DECREMENT" :
        const modifiedCart = state.items.map((item)=>{
            if(item.id===action.payload){
                return{...item,quantity:item.quantity-1 }
            }
            return item
        }).filter((item)=>item.quantity!==0)
        return{
            ...state,
            items : modifiedCart
        }
        case "GET_TOTAL" : 
        const {totalItems,totalAmount} = state.items.reduce((acc,curr)=>{
          acc.totalItems+=curr.quantity;
          acc.totalAmount+= +curr.price * curr.quantity;
          return acc
        },{totalItems:0,totalAmount:0})
        return{
            ...state,totalItems,totalAmount
        }
        default : return state
    }
}