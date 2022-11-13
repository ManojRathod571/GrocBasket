import { GET_SINGLE_DATA } from "./actiontypes"



const initialState={
    singleData:{}
}

const reducer =(state=initialState, action)=>{
    // console.log("action",action.payload)
    const {type , payload}=action
    switch(type){
        case GET_SINGLE_DATA:
            return{
                ...state,
               singleData: payload
                
            }
       
            default:
                return state
    }
}

export {reducer}