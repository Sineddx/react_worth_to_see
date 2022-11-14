const reducer = (state, action) => {
    if(action.type === "CHANGE_TEXT"){
        return {
            headerText: action.payload.text
        }
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer;