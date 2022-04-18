export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY_VAL_AS_TOTAL = "SET_MEMORY_VAL_AS_TOTAL"
export const ADD_MEMORY_VAL_TO_TOTAL = "ADD_MEMORY_VAL_TO_TOTAL"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const setMemoryValAsTotal = () => {
    return({type:SET_MEMORY_VAL_AS_TOTAL})
}

export const addMemoryValToTotal = () => {
    return({type:ADD_MEMORY_VAL_TO_TOTAL})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}