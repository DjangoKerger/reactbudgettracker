import React, { useState, useContext} from 'react';
import { GlobalContext} from '../context/GlobalState';


function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);


    function handleText(e){
        setText(e.target.value)
    }
    
    function handleAmount(e){
        setAmount(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount
    }

        addTransaction(newTransaction);
    }
        
    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" 
                          value={text}
                          onChange={handleText} 
                         placeholder="Enter Text..."   
                         />
                         
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income) </label>
                <input 
                    type="number" 
                     value={amount}
                     onChange={handleAmount}
                     placeholder="Enter amount..." 
                    />
                </div>
                <button className="btn"> Add transaction </button>
            </form>
        </>
    )
}

export default AddTransaction;