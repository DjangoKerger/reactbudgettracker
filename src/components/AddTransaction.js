import React, { useState } from 'react';


function AddTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    function handleText(e){
        setText(e.target.value)
    }
    
    function handleAmount(e){
        setAmount(e.target.value)
    }
        
    return(
        <>
            <h3>Add new transaction</h3>
            <form>
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