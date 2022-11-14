import React, {useReducer, useContext} from "react";
import reducer from "./reducer";

const initialState = {
    headerText: ""
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const changeHeaderText = (text) => {
        dispatch({
            type: "CHANGE_TEXT",
            payload: {text}
        })
    }
    return (
        <AppContext.Provider
            value={{...state, changeHeaderText}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppProvider, initialState, useAppContext}