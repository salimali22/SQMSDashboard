
import { ActionType } from "../constant/constant"

const initialState = {
    user : null,
}
export const loginreducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionType.LOGIN:
            return {
                ...state,
                user : action.payload,
            };
        case ActionType.LOGOUT:
            return {
                    ...state,
                    user : null,
            };
        default:
            return state;
    }
}