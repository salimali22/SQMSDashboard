
import { ActionType } from "../constant/constant"
import { getData } from "../../Firebase/firebase";
const initialState = {
    user : null,
    data : null
};
export const reducer = (state = initialState, action)=>{

    switch(action.type){
        case ActionType.LOGIN:
            return {
                ...state,
                user : action.payload,
                data : getData(),
            };
        case ActionType.LOGOUT:
            return {
                    ...state,
                    user : null,
                    data : null,
            };
        default:
            return state;
    }
}
