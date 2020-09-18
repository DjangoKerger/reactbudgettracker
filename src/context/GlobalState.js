import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


//Initial state

const initialState = {
    transaction: [
        { id: 1, text: 'FLower', amount: -20},
        { id: 2, text: 'Salary', amount: 300},
        { id: 3, text: 'Book', amount: -10},
        { id: 4, text: 'Camera', amount: 150}
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
} 