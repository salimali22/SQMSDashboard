

import { ActionType, DefectType } from "../constant/constant";

export const userLogin = (data)=>{
    return {
        type : ActionType.LOGIN,
        payload : data
    }
}


export const userLogOut = ()=>{
    return {
        type : ActionType.LOGOUT,
}
}

export const defectReport = ()=>{
    return {
        type : DefectType.DEFECT,
    }
}


export const operatorReport = ()=>{
    return {
        type : DefectType.OPERATOR,
    }
}