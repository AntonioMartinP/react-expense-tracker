export default (state,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                
               transactions:[...state.transactions,action.payload],
            }
         case "DELETE_TRANSACTION":
            return {
                ...state,
               transactions:state.transactions.filter(
                (transaction)=>transaction.id!==action.payload
               )

            
            }
        default:
            return state
    } 
}